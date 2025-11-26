import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useAuthentication, useSnackbar } from '@/ui/contexts';
import { storage } from '@/infra/adapters';
import { KEY } from '@/infra/config';
import { listCarros } from '@/application/services';
import { Carro } from '@/application/models';
import { Loader } from '@/ui/components/feedback';

export const CarSelector: React.FC = () => {

	const { notify } = useSnackbar();

	const [isLoading, setIsLoading] = useState(true);
	const [selectedCar, setSelectedCar] = useState<Carro | null>(null)

	useEffect(() => {
		getSelectedCar();
	}, [])

	useEffect(() => {
		console.log('selectedCar', selectedCar)
	}, [selectedCar])

	const getSelectedCar = async () => {
		try {
			setIsLoading(true);
			const carSelected = await storage.get(KEY.SELECTED_CAR);

			if(!carSelected) {
				const carros = await listCarros();
				console.log({carros});

				carros.length > 0 && setSelectedCar(carros[0]);
			}
		} catch (error: any) {
			notify(error.message, 'warning');
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Container>
			{isLoading ? <Loader /> :
				<>
					{!selectedCar ? <Message>Vazio</Message> :
					<>
						<Top>{selectedCar?.marca} {selectedCar?.modelo}</Top>
						<Bottom>{selectedCar?.placa}</Bottom>
					</>
					}
				</>
			}
		</Container>
	);
}

const Container = styled.TouchableHighlight`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 70px;

	border-radius: 10px;
	border: 1px solid green;

	box-shadow: 10px 5px 5px;

`

const Top = styled.Text`
	display: flex;

	color: ${props => props.theme.common.text};

	width: 50%;
`

const Bottom = styled.Text`
	display: flex;

	color: ${props => props.theme.common.text};
	width: 50%;
`

const Message = styled.Text`
	color: gray;
`
