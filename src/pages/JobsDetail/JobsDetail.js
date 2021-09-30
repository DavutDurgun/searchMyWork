import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';


//style
import styles from './JobsDetail.style';


//components
import Button from '../../components/Button';



const JobsDetail = ({ route }) => {
    const { item } = route.params;
    
    const addFavoriteJob=()=>{
        console.log('eklendi')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <View style={styles.row}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.title}>Locations: </Text>
                    <Text style={styles.location}>{item.locations[0].name}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.title}>Job Level: </Text>
                    <Text style={styles.level}>{item.levels[0].name}</Text>
                </View>

                <View style={[styles.row, styles.alignCenter]}>
                    <Text style={styles.pTitle}>Job Detail </Text>
                </View>

                <ScrollView style={styles.detail}  >
                    <RenderHtml
                        style={styles.detailText}
                        source={{ html: item.contents }}
                    />
                </ScrollView>
                <Button
                    text='Favorite Job'
                    isFavorite={false}
                    onPress={addFavoriteJob}
                />
            </View>
        </SafeAreaView>
    );
}

export default JobsDetail;