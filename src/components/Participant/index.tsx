import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    participantName: string;
    onRemove: () => void;
}

export function Participant({ participantName, onRemove }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {participantName}
            </Text>

            <TouchableOpacity
                style={styles.button} 
                onPress={onRemove}>
                <Text
                    style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}