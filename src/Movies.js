import React, { useEffect } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../services/moviesService';

const Movies = (props) => {
    const {movies} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    const fetchMovies = () => dispatch(getMovies());
    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
          <Text style={{fontSize: 22}}>Popular Movies</Text>
          <View style={{flex: 1, marginTop: 12}}>
            <FlatList
              data={movies.results}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                const IMAGE_URL =
                  'https://image.tmdb.org/t/p/w185' + item.poster_path;
                return (
                  <View style={{marginVertical: 12}} onStartShouldSetResponder={() => props.navigation.navigate('Details', {details: item})}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                      <Image
                        source={{
                          uri: IMAGE_URL,
                        }}
                        resizeMode="cover"
                        style={{width: 100, height: 150, borderRadius: 10}}
                      />
                      <View style={{flex: 1, marginLeft: 12}}>
                        <View>
                          <Text style={{fontSize: 22, paddingRight: 16}}>
                            {item.title}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row',marginTop: 10,alignItems: 'center'}}>
                          <Text style={{ fontSize: 18, paddingLeft: 10, color: '#64676D'}}> {item.vote_count}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      );
}

export default Movies;