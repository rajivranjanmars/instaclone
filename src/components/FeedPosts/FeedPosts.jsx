import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack ,Link} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
	const { isLoading, posts } = useGetFeedPosts();

	return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Shhh. Looks like you don&apos;t have any friends here.
          </Text>
          <Text color={"red.400"}>
            {" "}
            add me here{" "}
            <Link
              href="https://www.instagram.com/rajivranjanmars"
              target="_blank"
              color="blue.500"
              fontSize={14}
            >
              Rajiv Ranjan Mars
            </Link>
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
