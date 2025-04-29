import { Heading, Text, Link, UnorderedList, OrderedList, ListItem } from "@chakra-ui/react";

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
            <ListItem key={listItem._key} fontSize="lg" mb={2}>
              {listItem.children.map((child) => renderInline(child, listItem.markDefs))}
            </ListItem>
          ))}
        </ListComponent>
      );
    }

    const block = item;
    switch (block._type) {
      case 'block':
        if (/^h\d/.test(block.style)) {
          const level = parseInt(block.style.replace('h', ''));
          return (
            <Heading
              key={block._key}
              as={`h${level}`}
              size={['xl', '2xl'][level - 1] || 'xl'}
              my={6}
            >
              {block.children.map((child) => renderInline(child, block.markDefs))}
            </Heading>
          );
        }

        if (block.style === 'normal') {
          return (
            <Text key={block._key} mb={4} fontSize="lg" lineHeight="tall">
              {block.children.map((child) => renderInline(child, block.markDefs))}
            </Text>
          );
        }

        return null;

      default:
        return null;
    }
  });
};