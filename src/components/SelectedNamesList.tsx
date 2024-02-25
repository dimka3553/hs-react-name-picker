import styled from 'styled-components';
import { motion } from 'framer-motion';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled(motion.li)`
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
`;

const Container = styled.div`
    padding: 20px;
`;

function SelectedNamesList({ selectedNames }: { selectedNames: string[] }) {
    return (
        <Container>
            <h2>Selected Names</h2>
            <List>
                {selectedNames.map((name, index) => (
                    <ListItem
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {name}
                    </ListItem>
                ))}
            </List>
        </Container>

    );
}

export default SelectedNamesList;
