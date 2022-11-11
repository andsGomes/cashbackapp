// libraries
import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useDispatch, useSelector } from 'react-redux';

// js
import backHandler from '../../util/backHandler';
import instructions from '../../services/instructions';
import styles from './instructionStyle';
import generator from '../../util/generatorIdYoutube';

// components
import ArrowGoBack from '../../components/global/GoBackClick/ContainerGoBack';

function InstructionScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const {
        navigation,
    } = props;

    // states
    const [infoInstructions, setInfoInstructions] = useState({});
    const [newArrayInstructions, setNewArrayInstructions] = useState([]);
    const [idVideo, setIdVideo] = useState('');
    const [playing, setPlaying] = useState(false);

    // useEffect
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            backHandler.BackHandlerAdjuste(dispatch, resetPlaying);
            GetInfoInstructions();
        });

        return unsubscribe;
    }, []);

    // methods
    function NavigationArrowGoBack() {
        navigation.replace('AppRouteBottomTab');
    }

    function resetPlaying() {
        setPlaying(false);
    }

    const onStateChange = useCallback((state) => {
        if (state === 'playing' && !playing) {
            setPlaying(true);
        }
    }, []);

    async function GetInfoInstructions() {
        const dataInstructions = await instructions.GetInstructions(userInfo?.token, navigation, dispatch);
        if (!dataInstructions) {
            return null;
        }
        setInfoInstructions(dataInstructions.data);
        const arrayInstructions = [
            {
                title: 'Quem somos:\n',
                description: dataInstructions.data?.quamSomos,
            },
            {
                title: 'Vídeo',
            },
            {
                title: 'Próposito:\n',
                description: dataInstructions.data?.proposito,
            },
            {
                title: 'Passo a passo:\n',
                description: dataInstructions.data?.passoPasso,
            },
            {
                title: 'Regras:\n',
                description: dataInstructions.data?.regras,
            },
            {
                title: 'Dúvidas:\n',
                description: dataInstructions.data?.duvidas,
            },
            {
                title: 'Termos:\n',
                description: dataInstructions.data?.termos,
            },
            {
                title: 'Fale conosco:\n',
                description: dataInstructions.data?.faleConosco,
            },
        ];
        setNewArrayInstructions(arrayInstructions);
        const idVideoCompleted = generator.GetIdYoutube(dataInstructions?.data?.linkVideoApresentacao);
        if (idVideoCompleted) {
            setIdVideo(idVideoCompleted);
        }
    }

    // renders
    function PlayVideo() {
        if (!idVideo || !infoInstructions?.linkVideoApresentacao) {
            return null;
        }

        return (
            <YoutubePlayer
                height={230}
                play={playing}
                videoId={idVideo}
                onChangeState={onStateChange}
            />
        );
    }

    function RenderDescriptions() {
        return (
            <>
                {newArrayInstructions.map((value) => {
                    if (value.title === 'Vídeo') {
                        return (
                            PlayVideo()
                        );
                    }
                    if (value.description) {
                        return (
                            <Text style={styles.txtDistanceDescriptions}>
                                <Text style={styles.txtBodyTitle}>{value.title}</Text>
                                <Text style={styles.txtBody}>{value.description}</Text>
                            </Text>
                        );
                    }

                    return null;
                })}
            </>
        );
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            style={styles.scrollBackgroundDragging}
        >
            <ArrowGoBack onPress={NavigationArrowGoBack} />
            <Image
                resizeMode='contain'
                source={require('../../../assets/icons/logo.png')}
                style={styles.image}
            />
            <Text style={styles.txtHeader}>Como Funciona</Text>
            <View style={styles.container}>
                {RenderDescriptions()}
            </View>
        </ScrollView>
    );
}

export default InstructionScreen;
