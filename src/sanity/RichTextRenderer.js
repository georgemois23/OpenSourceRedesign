import { Heading, Text, Link, UnorderedList, OrderedList, ListItem,Box,Image } from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client"; 
const builder = imageUrlBuilder(client); // Create the builder using the Sanity client
const urlFor = (source) => builder.image(source);

const groupListItems = (blocks) => {
  const groupedBlocks = [];
  let currentList = null;

  blocks.forEach((block) => {
    if (block._type === 'block' && block.listItem) {
      if (
        currentList &&
        currentList.listItem === block.listItem &&
        currentList.level === block.level
      ) {
        currentList.items.push(block);
      } else {
        if (currentList) groupedBlocks.push(currentList);
        currentList = {
          _type: 'listGroup',
          listItem: block.listItem,
          level: block.level || 1,
          items: [block]
        };
      }
    } else {
      if (currentList) {
        groupedBlocks.push(currentList);
        currentList = null;
      }
      groupedBlocks.push(block);
    }
  });

  if (currentList) groupedBlocks.push(currentList);
  return groupedBlocks;
};

const renderInline = (child, markDefs) => {
  if (child._type !== 'span') return null;

  let content = child.text;
  if (!child.marks) return content;

  [...child.marks].reverse().forEach((mark) => {
    const linkDef = markDefs?.find(def => def._key === mark && def._type === 'link');
    
    if (linkDef) {
      content = (
        <Link key={mark} href={linkDef.href} color="brand.dark.secondary" isExternal>
          {content}
        </Link>
      );
    } else {
      switch (mark) {
        case 'strong':
          content = <strong key={mark}>{content}</strong>;
          break;
        case 'em':
          content = <em key={mark}>{content}</em>;
          break;
        case 'underline':
          content = <u key={mark}>{content}</u>;
          break;
        case 'code':
          content = <code key={mark} style={{padding: '2px 4px', borderRadius: 4 }}>{content}</code>;
          break;
        case 'strike-through':
          content = <s key={mark}>{content}</s>;
          break;
        default:
          break;
      }
    }
  });

  return content;
};

export const RichTextRenderer = ({ content }) => {
  const groupedContent = groupListItems(content);

  return groupedContent.map((item) => {
    if (item._type === 'listGroup') {
      const ListComponent = item.listItem === 'bullet' ? UnorderedList : OrderedList;
      return (
        <ListComponent key={item.items[0]._key} spacing={2} pl={4} my={4}>
          {item.items.map((listItem) => (
            <ListItem key={listItem._key} fontSize={{base:'md',lg:'lg'}} mb={2}>
              {listItem.children.map((child) => renderInline(child, listItem.markDefs))}
            </ListItem>
          ))}
        </ListComponent>
      );
    }

    const block = item;
    switch (block._type) {
      case 'block':
        case 'block':
      if (/^h\d/.test(block.style)) {
        const level = parseInt(block.style.replace('h', ''));
        
        // Define your size mapping
        const sizeMap = {
          1: 'xl',  // h1
          2: 'lg',   // h2
          3: 'md',   // h3
          4: 'md',   // h4
          5: 'sm',   // h5
          6: 'xs'    // h6
        };

        return (
          <Heading
            key={block._key}
            as={`h${level}`}
            size={sizeMap[level] || 'md'} // Fallback to medium
            my={level <= 3 ? 6 : 4}      // Larger margin for h1-h3
            fontWeight={level <= 2 ? 'bold' : 'semibold'}
            lineHeight="shorter"
          >
            {block.children.map((child) => renderInline(child, block.markDefs))}
          </Heading>
        );
      }
        if (block.style === 'normal') {
          return (
            <Text key={block._key} mb={4} fontSize={{base:'md',lg:'lg'}} lineHeight="tall">
              {block.children.map((child) => renderInline(child, block.markDefs))}
            </Text>
          );
        }

        return null;


        case 'image':
          // Corrected: Use block.asset instead of block.image
          const imageUrl = block.asset 
            ? urlFor(block.asset)
                .width(800)
                .fit('max')
                .auto('format')
                .url()
            : null;
          
          return (
            <Box key={block._key} my={6} textAlign="center">
              <Image
                src={imageUrl}
                alt={block.alt || ''}
                draggable={false}
                borderRadius="md"
                mb={6}
                maxW="100%"
                w={"80%"}
                h="auto"
                mx="auto"
                loading="lazy"
                fallbackSrc={block.asset?.metadata?.lqip}
                css={{
                  aspectRatio: block.asset?.metadata?.dimensions?.aspectRatio || 'auto',
                  objectFit: 'contain'
                }}
              />
              {block.caption && (
                <Text fontSize="sm" color="gray.500" mt={2}>
                  {block.caption}
                </Text>
              )}
            </Box>
  );

      default:
        return null;
    }
  });
};