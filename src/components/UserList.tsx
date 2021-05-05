import { FC } from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import UserCard from './UserCard';

const StyledUserList = styled.ul`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
	gap: 1rem;
`;

const UserList: FC = () => {
	const { users } = useTypedSelector((state) => state.users);
	return (
		<StyledUserList>
			{users.map((user) => (
				<UserCard key={user.id} {...user} />
			))}
		</StyledUserList>
	);
};

export default UserList;
