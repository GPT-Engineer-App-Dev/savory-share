import { Box, Container, VStack, Text, Heading, Input, Textarea, Button, Flex, SimpleGrid, Image, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [recipes, setRecipes] = useState([
    {
      title: "Spaghetti Carbonara",
      image: "https://via.placeholder.com/150",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      title: "Chicken Curry",
      image: "https://via.placeholder.com/150",
      description: "A flavorful and spicy chicken curry made with a blend of spices and coconut milk.",
    },
  ]);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, newRecipe]);
    setNewRecipe({ title: "", image: "", description: "" });
  };

  const columns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="brand.700" color="white" p={4} mb={8}>
        <Heading size="lg">Recipe Sharing</Heading>
      </Box>

      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="md" mb={4}>Featured Recipes</Heading>
          <SimpleGrid columns={columns} spacing={4}>
            {recipes.map((recipe, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={recipe.image} alt={recipe.title} />
                <Box p={4}>
                  <Heading size="md">{recipe.title}</Heading>
                  <Text mt={2}>{recipe.description}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box as="form" onSubmit={handleSubmit}>
          <Heading size="md" mb={4}>Submit Your Recipe</Heading>
          <VStack spacing={4}>
            <Input
              placeholder="Recipe Title"
              name="title"
              value={newRecipe.title}
              onChange={handleChange}
              isRequired
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newRecipe.image}
              onChange={handleChange}
              isRequired
            />
            <Textarea
              placeholder="Recipe Description"
              name="description"
              value={newRecipe.description}
              onChange={handleChange}
              isRequired
            />
            <Button type="submit" colorScheme="teal" width="full">Submit</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;