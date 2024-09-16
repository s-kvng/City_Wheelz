import {
  UserSessionContext,
  useUserSessionContext,
} from "@/context/UserSessionContext";
import {
  Menu,
  Button,
  Text,
  rem,
  UnstyledButton,
  Flex,
  Avatar,
} from "@mantine/core";
import { IoChevronDown } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { logOut } from "@/services/auth.service";
import { useRouter } from "next/navigation";

function ProfileMenu() {
  const { user } = useUserSessionContext();
  const router = useRouter();

  const handleSignOut = async () => {
    // TODO: Implement sign out logic
    await logOut();
    router.replace("/login");
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton
          component={Flex}
          gap={8}
          variant="subtle"
          py="sm"
          align="center"
        >
          <Avatar src="" radius="xl" />
          <IoChevronDown />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{user?.email}</Menu.Label>

        <Menu.Divider />
        <Menu.Item
          component="button"
          type="button"
          role="button"
          color="red"
          leftSection={<BiLogOutCircle size="1rem" />}
          onClick={handleSignOut}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;
