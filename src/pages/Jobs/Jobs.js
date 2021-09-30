import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

//style
import styles from './Jobs.style';

//component
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import JobsList from '../../components/Card/JobsList'

//services
import GeneralServices from '../../utils/services/GeneralServices';

const Jobs = ({ navigation }) => {
    const { data, apiLoading, apiError, get } = GeneralServices();

    useEffect(() => {
        get('https://www.themuse.com/api/public/jobs?page=5');
    }, []);

    const jobsListHandleClick = (item) => {
        navigation.navigate('JobsDetailPage', { item, });
    }

    const jobsListRender = ({ item }) => (
        <JobsList
            name={item.name}
            level={item.levels[0].name}
            location={item.locations[0].name}
            type={item.type}
            onPress={() => jobsListHandleClick(item)}
        />
    );

    const jobsKeyExtractor = item => `${item.id}`;

    if (apiLoading)
        return <Loading />

    if (apiError)
        return <Error />

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <FlatList
                    style={styles.flatList}
                    data={data !== null ? (data['results'] || []) : []}
                    renderItem={jobsListRender}
                    keyExtractor={jobsKeyExtractor}
                />
            </View>
        </SafeAreaView>
    );
}

export default Jobs;