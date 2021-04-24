import useSwr from "swr";
import Link from "next/link";
import { Box, Container } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Users() {
  const { data, error } = useSwr("/api/users", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <DarkModeSwitch />
      <Box padding="3">
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <Link href="/user/[id]" as={`/user/${user.id}`}>
                <a>{`User ${user.id}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}
