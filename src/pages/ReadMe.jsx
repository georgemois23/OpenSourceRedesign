import React from 'react';
import {
  Box,
  Text,
  Button,
  Center,
  Heading,
  Flex,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUserPlus } from 'react-icons/fi';

const ReadMe = () => {
  document.title = 'Readme - Open Source UoM';
  const navigate = useNavigate();

  const bg = 'transparent';
//   const cardBg = 'brand.dark.text';
  const cardBg = "rgba(0, 10, 38, 0.95)";
  const headingColor = 'brand.dark.secondary';
  const textColor = 'brand.dark.text';

  const sections = [
    {
      title: 'Ποιοι είμαστε',
      content:
        'Η Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας είναι μια ζωντανή και δραστήρια ομάδα, που δημιουργήθηκε από φοιτητές και φοιτήτριες του ΠΑ.ΜΑΚ. Στόχος μας είναι η ανάδειξη, η διάδοση και η πρακτική αξιοποίηση του Ελεύθερου Λογισμικού, του Λογισμικού Ανοιχτού Κώδικα (ΕΛ/ΛΑΚ) και των τεχνολογιών Open Source Hardware. Μέσα από συλλογική δουλειά και δημιουργική συνεργασία, ενισχύουμε τον ρόλο της τεχνολογίας ως ένα ανοιχτό και συμμετοχικό πεδίο μάθησης, εξέλιξης και προσφοράς.'
    },
    {
      title: 'Πώς λειτουργούμε',
      content:
        'Η συμμετοχή στην κοινότητα είναι απολύτως εθελοντική και δεν συνεπάγεται καμία οικονομική υποχρέωση. Κάθε συνεισφορά είναι ευπρόσδεκτη — από την ενεργή συμμετοχή σε δράσεις και έργα, μέχρι την υποστήριξη σε πρακτικά ζητήματα ή και την ενίσχυση του εξοπλισμού και της υποδομής μας. Όποτε προκύπτουν ανάγκες (π.χ. για τη διοργάνωση ενός workshop ή την αγορά υλικού), δίνεται η δυνατότητα στους συμμετέχοντες να βοηθήσουν προαιρετικά. Για οποιαδήποτε πληροφορία ή ενδιαφέρον για ένταξη, η ομάδα μας είναι πάντα διαθέσιμη για επικοινωνία.',
    },
    {
      title: 'Ποιος μπορεί να συμμετέχει',
      content:
        'Η κοινότητα είναι ανοιχτή σε όλα τα μέλη της πανεπιστημιακής κοινότητας, ανεξαρτήτως σχολής ή γνωστικού αντικειμένου. Δεν απαιτείται προηγούμενη εμπειρία στον προγραμματισμό ή στις τεχνολογίες πληροφορικής — αρκεί το ενδιαφέρον και η διάθεση για συμμετοχή. Είτε σε ενδιαφέρουν τεχνικά ζητήματα, είτε η επικοινωνία, η οργάνωση ή ο σχεδιασμός, υπάρχει πάντα τρόπος να συνεισφέρεις. Στόχος μας είναι να ενθαρρύνουμε τη συνεργασία και τη μεταφορά γνώσης σε ένα περιβάλλον όπου όλοι μπορούν να μάθουν και να προσφέρουν.',
    },
  ];

  return (
    <Box minH="100vh" px={{ base: 4, md: 10 }} py={10} bg={bg}>
      <Heading
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb={12}
        userSelect="none"
        color={headingColor}
        textAlign="center"
      >
        ReadMe - Περισσότερα για εμάς
      </Heading>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={12}
        justify="center"
        align="stretch"
        flexWrap="wrap"
        maxW="7xl"
        mx="auto"
      >
        {sections.map((section, index) => (
          <Box
            key={index}
            bg={cardBg}
            p={6}
            rounded="lg"
            shadow="md"
            flexBasis={{ base: '100%', md: '45%', lg: '30%' }}
            transition="all 0.2s"
            _hover={{ shadow: 'xl' }}
            boxShadow="0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.4)"
            border="1px solid rgba(255, 255, 255, 0.13)"
          >
            <Heading
              as="h3"
              size="md"
              mb={4}
              textAlign="left"
              color={headingColor}
            >
              {section.title}
            </Heading>
            <Text textAlign="left" color={textColor} fontSize="sm">
              {section.content}
            </Text>
          </Box>
        ))}
      </Flex>

       <Center mt={16}>
      <VStack spacing={4}>
        <Text fontSize={{sm:"xl",md:"2xl"}} fontWeight="semibold">
          Μήπως σε πείσαμε;
        </Text>
        <Button
          size={{sm:'md',md:"lg"}}
          leftIcon={<FiUserPlus />}
          onClick={() => navigate('/register')}
        >
          Γίνε μέλος
        </Button>
      </VStack>
    </Center>
    </Box>
  );
};

export default ReadMe;
