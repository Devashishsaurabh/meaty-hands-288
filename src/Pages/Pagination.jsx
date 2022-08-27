import { Box, Button, Flex,Text} from "@chakra-ui/react";
import React, { useState } from "react";

const Pagination = ({page,setPage}) => {
  const [total,setTotalPage]=useState(7);
  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: "20px" }}
      >
        <Box>
          <Flex alignItems="center">
            <Text as="h6">Pages : </Text>
            {new Array(total).fill(0).map((_, index) => (
              <Flex>
                <Button
                  onClick={() => setPage(1 + index)}
                  background={page === 1 + index ? "green" : ""}
                >
                  {1 + index}
                </Button>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box>
          <Button disabled={page===1} onClick={() => setPage(page - 1)}>Prev</Button>
          <Button  disabled={page===total} onClick={() => setPage(page + 1)}>Next</Button>
        </Box>
      </Flex>
    </div>
  );
};

export default Pagination;
