import React, { useState, useCallback, useContext, createContext } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

const ConfirmContext = createContext();

export const useConfirm = () => useContext(ConfirmContext);

export const ConfirmProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [resolvePromise, setResolvePromise] = useState(null);

    const confirm = useCallback((text) => {
        setMessage(text);
        setVisible(true);
        return new Promise((resolve) => {
            setResolvePromise(() => resolve);
        });
    }, []);

    const handleConfirm = () => {
        setVisible(false);
        resolvePromise(true);
    };

    const handleCancel = () => {
        setVisible(false);
        resolvePromise(false);
    };

    return (
        <ConfirmContext.Provider value={{ confirm }}>
            {children}
            <Modal visible={visible} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Text style={styles.message}>{message}</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity onPress={handleCancel} style={[styles.buttonCancelar, styles.button]}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleConfirm} style={[styles.buttonConfirmar, styles.button]}>
                                <Text style={styles.buttonText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ConfirmContext.Provider>
    );
};


