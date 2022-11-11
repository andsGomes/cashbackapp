// libraries
import React from 'react';
import { Dimensions, Image, Modal, TouchableOpacity, Text } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

// js
import styles from '../homeStyles';

function ContainerModalActivities(props) {
    // constants
    const {
        data,
        openModal,
        setOpenModal,
    } = props;
    const url = { uri: data.url };

    // render
    return (
        <Modal
            animationType='none'
            transparent
            visible={openModal}
        >
            {/*
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <Text style={styles.titleModal}>{data.nomeUsuario}</Text>
                        <View style={styles.containerCentralizeImage}>
                            <View>
                                <ImageModal
                                    source={url}
                                    style={styles.imageModal}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                        {!data?.duracao ? null : (
                            <View>
                                <Text style={styles.titleHours}>Tempo de Execução</Text>
                                <Text style={styles.txtHours}>{data.duracao}</Text>
                            </View>
                        )}
                        <TouchableOpacity
                            onPress={() => setOpenModal(false)}
                            style={styles.buttonCloseModal}
                        >
                            <Text style={styles.txtCloseModal}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            */}
            <ImageZoom
                cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={600}
                imageHeight={600}
                style={styles.imageZoom}
            >
                <Image
                    resizeMode='contain'
                    source={url}
                    style={styles.imageModal}
                />
            </ImageZoom>
            <TouchableOpacity
                onPress={() => setOpenModal(false)}
                style={styles.buttonCloseModal}
            >
                <Text style={styles.txtCloseModal}>X</Text>
            </TouchableOpacity>
        </Modal>
    );
}

export default ContainerModalActivities;
