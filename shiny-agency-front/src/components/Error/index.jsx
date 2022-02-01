import styled from "styled-components";
import colors from "../../utils/style/color";
import Error404 from "../../assets/pictures/404.svg";

const WrapperError = styled.div`
    margin-top: 120px;
    display: flex;
    justify-content: center;
`;

const ContainerError = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    padding: 60px 90px;
`;

const MessageErrorH1 = styled.h1`
    text-align: center;
    font-weight: 300;
`;

const Image404 = styled.img`
    width: 400px;
`;

const MessageErrorP = styled.p`
    text-align: center;
    margin-top: 30px;
    color: ${colors.secondary};
`;

function Error() {
    return (
        <WrapperError>
            <ContainerError>
                <MessageErrorH1>Oups...</MessageErrorH1>
                <Image404 src={Error404} alt="erreur 404" />
                <MessageErrorP>
                    Il semblerait qu'il y ait un problème
                </MessageErrorP>
            </ContainerError>
        </WrapperError>
    );
}

export default Error;
