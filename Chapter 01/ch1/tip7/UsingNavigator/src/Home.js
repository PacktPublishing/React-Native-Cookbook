import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

class Home extends Component {
  state = {
    forYou: {
      title: 'Just for you',
      root: 'https://s3.amazonaws.com/crysfel/public/book/01/07',
      songs: [
        {title:'Some nice song', image: '1.jpg'},
        {title:'One more nice song', image: '2.jpg'},
        {title:'Here\'s one more song', image: '3.jpg'},
        {title:'Really nice song', image: '4.jpg'},
        {title:'I love this song', image: '5.jpg'},
        {title:'This is a song', image: '6.jpg'},
      ],
    },
    played: {
      title: 'Recently played',
      root: 'https://s3.amazonaws.com/crysfel/public/book/01/07',
      songs: [
        {title:'This is a song', image: '6.jpg'},
        {title:'Really nice song', image: '4.jpg'},
        {title:'Some nice song', image: '1.jpg'},
        {title:'Here\'s one more song', image: '3.jpg'},
        {title:'I love this song', image: '5.jpg'},
        {title:'One more nice song', image: '2.jpg'},
      ],
    },
    popular: {
      title: 'Popular music',
      root: 'https://s3.amazonaws.com/crysfel/public/book/01/07',
      songs: [
        {title:'I love this song', image: '5.jpg'},
        {title:'Here\'s one more song', image: '3.jpg'},
        {title:'One more nice song', image: '2.jpg'},
        {title:'This is a song', image: '6.jpg'},
        {title:'Really nice song', image: '4.jpg'},
        {title:'Some nice song', image: '1.jpg'},
      ],
    }
  };

  onSelectSong(song) {
    this.props.navigator.push({song});
  }

  renderSong(section, song, index){
    return (
      <TouchableHighlight
        onPress={() => this.onSelectSong(song)}
        style={styles.song} key={index}
      >
        <View>
          <Image
            source={{uri:`${section.root}/${song.image}`}}
            style={styles.image}
          />
          <Text style={styles.songTitle}>{song.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderSection(options) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{options.title.toUpperCase()}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          options.songs.map((song, index) => this.renderSong(options, song, index))
        }
        </ScrollView>
      </View>
    );
  }

  render() {
    const {
      forYou,
      played,
      popular,
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        {this.renderSection(forYou)}
        {this.renderSection(played)}
        {this.renderSection(popular)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1b1a',
  },
  title: {
    backgroundColor: '#37b298',
    color: '#fff',
    padding: 10,
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  section: {
    padding: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: '200',
    paddingBottom: 10,
  },
  song: {
    backgroundColor: '#081412',
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  songTitle: {
    color: '#f1f1f1',
    fontWeight: '200',
    fontSize: 12,
    flex: 1,
    padding: 5,
    width: 100,
  }
});

export default Home;
