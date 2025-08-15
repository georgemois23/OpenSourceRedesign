import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Code,Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading,Text} from '@chakra-ui/react';
const commandCategories = [
    {
    "label": "Διαχείριση Αρχείων",
    "commands": [
        {
            "command": "ls",
            "description": "Παρουσίαση των αρχείων ενός καταλόγου"
        },
        {
            "command": "cd dir",
            "description": "Μετάβαση στο κατάλογο dir"
        },
        {
            "command": "pwd",
            "description": "Εμφάνιση του ενεργού καταλόγου"
        },
        {
            "command": "mkdir dir",
            "description": "Δημιουργία καταλόγου με το όνομα dir"
        },
        {
            "command": "rm file",
            "description": "Διαγραφή του αρχείου file"
        },
        {
            "command": "rmdir dir",
            "description": "Διαγραφή του καταλόγου dir"
        },
        {
            "command": "cp file1 file2",
            "description": "Αντιγραφή του αρχείου file1 στο αρχείο file2"
        },
        {
            "command": "mv file1 file2",
            "description": "Μετακίνηση ή μετονομασία του αρχείου file1 στο αρχείο file2"
        },
        {
            "command": "ln -s file link",
            "description": "Δημιουργία συμβολικού συνδέσμου link στο αρχείο file"
        },
        {
            "command": "touch file",
            "description": "Δημιουργία ή ανανέωση του αρχείου file"
        },
        {
            "command": "cat file",
            "description": "Εμφάνιση των περιεχομένων του αρχείου file"
        },
        {
            "command": "less file",
            "description": "Εμφάνιση των περιεχομένων του αρχείου file με κύλιση"
        },
        {
            "command": "head file",
            "description": "Εμφάνιση των πρώτων γραμμών του αρχείου file"
        },
        {
            "command": "tail file",
            "description": 	"Εμφάνιση των τελευταίων γραμμών του αρχείου file"
        },
        {
          command: 'tail -f file',
          description: 'Συνεχής εμφάνιση των περιεχομένων του αρχείου καθώς αυτό μεγαλώνει'
      }
    ]
},
 {
    "label": "Ανακατεύθυνση Αρχείων",
    "commands": [
        {
            "command": "command>file",
            "description": "Ανακατεύθυνση της εξόδου μιας εντολής command στο αρχείο file"
        },
        {
            "command": "command>>file",
            "description": "Ανακατεύθυνση της εξόδου μιας εντολής command στο τέλος του αρχείου file χωρίς διαγραφή των προηγούμενων περιεχομένων"
        },
        {
            "command": "command1|command2",
            "description": "Επεξεργασία της εξόδου της εντολής command1 με χρήση της εντολής command2"
        },
    ]
},
{
    "label": "Πληροφορίες συστήματος",
    "commands": [
        {
            "command": "date",
            "description": "Εμφάνιση της τρέχουσας ώρας και ημέρας στο σύστημα"
        },
        {
            "command": "cal",
            "description": "Εμφάνιση ημερολογίου για τον τρέχον μήνα"
        },
        {
            "command": "uptime",
            "description": "Εμφάνιση του χρόνου λειτουργίας"
        },
        {
            "command": "uname -a",
            "description": "Εμφάνιση έκδοσης του πυρήνα"
        },
        {
            "command": "cat /proc/cpuinfo",
            "description": "Εμφάνιση πληροφοριών CPU"
        },
        {
            "command": "cat /proc/meminfo",
            "description": "Εμφάνιση πληροφοριών μνήμης"
        },
        {
            "command": "df",
            "description": "Εμφάνιση χρήσης δίσκων σε χωρητικότητα"
        },
        {
            "command": "du",
            "description": "Εμφάνιση χρήσης χώρου καταλόγων"
        },
        {
            "command": "free",
            "description": "Εμφάνιση χρήσης μνήμης και swap"
        },
        {
            "command": "which app",
            "description": "Εμφάνιση του ακριβούς εκτελέσιμου app που καλεί το σύστημα"
        },
        {
            "command": "file filename",
            "description": "Εμφάνιση του τύπου αρχείου του filename"
        },
    ]
}
, {
    "label": "Προσάρτηση συσκευών αποθήκευσης",
    "commands": [
        {
            "command": "mount /dev/sdxX /mnt/mountpoint",
            "description": "Προσάρτηση της συσκευής /dev/sdxX στο /mnt/mountpoint (απαιτεί δικαιώματα υπερχρήστη)"
        },
        {
            "command": "pmount /dev/sdxX",
            "description": "Προσάρτηση της συσκευής /dev/sdxX (εξωτερικό πρόγραμμα)"
        },
    ]
}
, {
    "label": "Διαχείριση διεργασιών",
    "commands": [
        {
            "command": "ps",
            "description": "Εμφάνιση των ενεργών διεργασιών του χρήστη σας τη παρούσα στιγμή"
        },
        {
            "command": "top",
            "description": "Εμφάνιση όλων των διεργασιών"
        },
        {
            "command": "kill pid",
            "description": "Αναγκαστικό κλείσιμο της διεργασίας με αυτό το pid"
        },
        {
            "command": "killall name",
            "description": "Αναγκαστικό κλείσιμο όλων των διεργασιών με όνομα name"
        },
        {
            "command": "htop",
            "description": "Ολοκληρωμένη διαχείριση εργασιών (εξωτερικό πρόγραμμα)"
        },
    ]
}
, {
    "label": "Δικαιώματα αρχείων",
    "commands": [
        {
            "command": "chmod octal file",
            "description": "Αλλαγή των δικαιωμάτων του αρχείου file σε octal, το octal είναι ένα τριψήφιο νούμερο που καθένα από τα ψηφία του συμβολίζει με τη σειρά το χρήστη, το group και όλους τους χρήστες"
        },
        {
            "command": "chmod user:group file",
            "description": "Αλλαγή της ιδιοκτησίας ενός αρχείου file στο χρήστη user και την ομάδα group"
        },
    ]
}
,{
    "label": "Αναζήτηση",
    "commands": [
        {
            "command": "grep pattern files",
            "description": "Αναζήτηση ενός όρου pattern στα αρχεία files"
        },
        {
            "command": "locate file",
            "description": "Εντοπισμός όλων των υφιστάμενων αντιγράφων ενός αρχείου (χρήση της βάσης δεδομένων αρχείων του συστήματος)"
        },
        {
            "command": "find dir-name file",
            "description": "Εντοπισμός όλων των αρχείων με όνομα file στο κατάλογο dir (άμεση αναζήτηση)"
        },
    ]
}
, {
    "label": "Συμπίεση",
    "commands": [
        {
            "command": "gzip file",
            "description": "Συμπίεση ενός αρχείου file στο file.gz"
        },
        {
            "command": "bzip2 file",
            "description": "Συμπίεση ενός αρχείου file στο file.bz2"
        },
        {
            "command": "xz file",
            "description": "Συμπίεση ενός αρχείου file στο file.xz"
        },
        {
            "command": "gunzip file.gz",
            "description": "Αποσυμπίεση ενός αρχείου file.gz"
        },
        {
            "command": "bunzip2 file.bz2",
            "description": "Αποσυμπίεση ενός αρχείου file.bz2"
        },
        {
            "command": "xzdec file.xz",
            "description": "Αποσυμπίεση ενός αρχείου file.xz"
        },
        {
            "command": "tar cvzf file.tar.gz files",
            "description": "Δημιουργία αρχείου tar με όνομα file.tar.gz που θα περιέχει τα αρχεία files (συμπίεση gzip)"
        },
        {
            "command": "tar cvjf file.tar.bz2 files",
            "description": "Δημιουργία αρχείου tar με όνομα file.tar.bz2 που θα περιέχει τα αρχεία files (συμπίεση bzip2)"
        },
        {
            "command": "tar cv files| xz file.tar.xz",
            "description": "Δημιουργία αρχείου tar με όνομα file.tar.xz που θα περιέχει τα αρχεία files (συμπίεση xz)"
        },
        {
            "command": "tar xf file.tar.{gz,bz2,xz,…}",
            "description": "Αποσυμπίεση του αρχείου file.tar.{gz,bz2,xz,…}"
        },
        {
            "command": "tartf file.tar.{gz,bz2,xz,…}",
            "description": "Εικονική αποσυμπίεση του αρχείου file.tar.{gz,bz2,xz,…}"
        },
        {
            "command": "zip -r file.zip files",
            "description": "Συμπίεση των αρχείων files στο file.zip"
        },
        {
            "command": "unzip file.zip",
            "description": "Αποσυμπίεση του αρχείου file.zip"
        },
    ]
}
,{
    "label": "Δικτύωση",
    "commands": [
        {
            "command": "ping host",
            "description": "Ping (επικοινωνία) με ένα εξυπηρετητή host και εμφάνιση αποτελέσματος"
        },
        {
            "command": "traceroute host",
            "description": "Εμφάνιση της πορείας των πακέτων στο δίκτυο κατά την επικοινωνία με τον εξηπηρετητή host"
        },
        {
            "command": "wget URL",
            "description": "Κατέβασμα του αρχείου που βρίσκεται στο URL"
        },
    ]
}
,{
    "label": "SSH",
    "commands": [
        {
            "command": "ssh user@host",
            "description": "Σύνδεση με τον διακομιστή host ως χρήστης user"
        },
        {
            "command": "ssh-copy-id user@host",
            "description": "Προσθήκη του κλειδιού σας στον διακομιστή host για το χρήστη user ώστε να ενεργοποιηθεί ή είσοδος με την χρήση του κλειδιού χωρίς κωδικό"
        },
    ]
}
,{
    "label": "Συντομεύσεις",
    "commands": [
        {
            "command": "Ctrl+C",
            "description": "Παύση της τρέχουσας εντολής"
        },
        {
            "command": "Ctrl+Z",
            "description": "Σταμάτημα της τρέχουσας εντολής, επανέναρξη με fg για το foreground ή bg για το background"
        },
        {
            "command": "Ctrl+W",
            "description": "Διαγραφή μιας λέξης στη τρέχουσα γραμμή"
        },
        {
            "command": "Ctrl+U",
            "description": "Διαγραφή ολόκληρης της γραμμής"
        },
        {
            "command": "Ctrl+R",
            "description": "Πρόσφατες εντολές"
        },
    ]
}
,{
    "label": "Διάφορα",
    "commands": [
        {
            "command": "alias myalias=”command”",
            "description": "Δημιουργία του ψευδώνυμου myalias για την εντολή command που εισάγεται στο αρχείο .bashrc"
        },
        {
            "command": "man command",
            "description": "Εμφανίζει στην οθόνη την περιγραφή και οδηγίες σχετικά µε κάποια από τις εντολές του συστήµατος"
        },
        {
            "command": "passwd",
            "description": "Αλλάζει το συνθηματικό (password) ενός χρήστη"
        },
    ]
}
];

const LinuxCommands = () => {
    document.title = 'Βασικές εντολές του LINUX - Open Source UoM';
  return (
    <Box  minH={'100vh'} px={4} py={8} scrollBehavior="smooth" >
                  <Heading pl={1} as="h1" size="xl" mb={8} userSelect={'none'} >
                  Βασικές εντολές του GNU/LINUX
                  </Heading>
    <Text fontSize={{ base: "sm", md: "md" }} textAlign="left" mb={4} color="gray.400">
        Εδώ θα δούμε κάποιες βασικές εντολές τερματικού
        </Text>
    {/* <Accordion allowMultiple mt={10} mb={10}> */}
    <Accordion mt={10} mb={10}>
  {commandCategories.map((category, index) => (
    <AccordionItem 
      key={index} 
      width={{ base: "95%", md: "90%" }}
      mx="auto"
      borderRadius={8}
      mb={4}
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.4)"
    bg="rgba(0, 12, 45, 0.98)" 
    backdropFilter="blur(14px)"
    border="1px solid rgba(0, 46, 102, 0.96)"

    >
      <Heading as="h2" size={{ base: "md", md: "lg" }} mb={0}>
        <AccordionButton 
          px={4}
        >
          <Box as="span" flex="1" textAlign="center" py={3}>
            {category.label}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      
      <AccordionPanel px={0} py={0} transition="all 0.3s ease-in-out"
      maxHeight="400px" 
  overflowY="auto"
      >
        <TableContainer width="100%">
          <Table 
            variant="simple"
            colorScheme="blue"
            size={{ base: "sm", md: "md" }} 
            width="100%"
          > <colgroup>
          <col width="40%" />
          <col width="60%" />
        </colgroup>
            <Thead>
              <Tr>
                <Th 
                  textAlign="center" 
                  px={{ base: 2, md: 4 }}
                  py={3}
                  color="brand.dark.secondary"
                  bg="gray.300"
                >
                  Εντολη
                </Th>
                <Th 
                  textAlign="center" 
                  px={{ base: 2, md: 4 }}
                  py={3}
                  color="brand.dark.secondary"
                  bg="gray.300"
                >
                  Περιγραφη
                </Th>
              </Tr>
            </Thead>
            
            <Tbody>
              {category.commands.map((commandItem, cmdIndex) => (
                <Tr key={cmdIndex}>
                  <Td 
                    px={{ base: 2, md: 4 }}
                    py={3}
                    textAlign="center"
                    wordBreak="break-word"
                    whiteSpace="wrap"
                    borderColor="rgba(0, 46, 102, 0.1)"
                    maxW="200px"
                  >
                    {commandItem.command}
                  </Td>
                  <Td 
                    px={{ base: 2, md: 4 }}
                    py={3}
                    textAlign="center"
                    wordBreak="break-word"
                    whiteSpace="normal"
                    borderColor="rgba(0, 46, 102, 0.1)"
                    maxW="250px"
                  >
                    {commandItem.description}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  ))}
</Accordion>
  </Box>


  );
};

export default LinuxCommands;
