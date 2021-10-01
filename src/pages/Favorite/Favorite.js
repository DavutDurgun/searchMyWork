import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

//style
import styles from './Favorite.style';

//reducer
import { useDispatch, useSelector } from 'react-redux';

//components
import Button from '../../components/Button';
import JobsList from '../../components/Card/JobsList'


const Favorite = () => {
    const dispatch = useDispatch();
    const [jobsFavoriteList, setJobsFavoriteList] = useState(useSelector(s => s.jobsFavoriteList))


    const removeFavoriteJob = (find) => {
        let arr = [];
        jobsFavoriteList.map((item, index) => {
            if (item.id !== find.id)
                arr.push(item)

        });
        dispatch({ type: 'SET_ADD_FAVORITE_JOBS', payload: { jobsFavoriteList: arr, } });
        setJobsFavoriteList(arr);
    }




    const jobsFavoriteListRender = ({ item }) => (
        <View style={{ backgroundColor: 'white', marginBottom: 20 }}>
            <JobsList
                name={item.name}
                level={item.levels[0].name}
                location={item.locations[0].name}
                type={item.type}
            />
            <Button
                text='Remove  Favorite'
                onPress={() => { removeFavoriteJob(item) }}
            />
        </View>
    );

    const jobsKeyExtractor = item => `${item.id}`;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={jobsFavoriteList}
                    renderItem={jobsFavoriteListRender}
                    keyExtractor={jobsKeyExtractor}
                />
            </View>
        </SafeAreaView>
    );
}

export default Favorite;
