import useSwr from "swr";
import Link from "next/link";
import { Box, Container } from "@chakra-ui/react";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function games() {
  const { data, error } = useSwr("/api/game", fetcher);

  if (error) return <div>Failed to load games</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <DarkModeSwitch />
      <Box padding="3">
        <ul>
          {data.map((game) => (
            <li key={game.id}>
              <Link href="/game/[id]" as={`/game/${game._id}`}>
                <a>{`game ${game.name}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}
