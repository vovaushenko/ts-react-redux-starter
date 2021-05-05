import { FC, useEffect } from 'react';

import styled from 'styled-components';
import UserList from '../components/UserList';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledUsersPage = styled.main`
	display: grid;
	justify-items: center;
	max-width: 1170px;
	width: 90%;
	margin: 1rem auto;
	padding: 1rem;
`;

const Users: FC = () => {
	const { fetchUsers } = useActions();
	const { loading, error } = useTypedSelector((theme) => theme.users);

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) {
		return (
			<main>
				<h1>Loading...</h1>
			</main>
		);
	}
	if (error) {
		return (
			<main>
				<h1>{error}</h1>
			</main>
		);
	}
	return (
		<StyledUsersPage>
			<UserList />
		</StyledUsersPage>
	);
};

export default Users;
