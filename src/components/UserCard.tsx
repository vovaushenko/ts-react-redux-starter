import { FC } from 'react';
import styled from 'styled-components';

interface UserCardProps {
	id: number;
	name: string;
	username: string;
	email: string;
	address: object;
	phone: string;
	website: string;
	company: object;
}

const StyledUserCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	border: 1px solid ${({ theme }) => theme.mainColor};
	border-radius: 1rem;
	padding: 1rem;
`;

const UserCard: FC<UserCardProps> = ({ id, name, username, email }) => {
	return (
		<StyledUserCard>
			<header>
				<h3>{name}</h3>
			</header>

			<footer>
				<h4>aka {username}</h4>
				<p>{email}</p>
			</footer>
		</StyledUserCard>
	);
};

export default UserCard;
