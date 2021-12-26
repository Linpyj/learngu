<template>
      <v-row>
        <v-col 
          cols="6"
          v-for="content in contents"
          :key="content.id"
        >
        <Card
          :item="content"
        />
        </v-col>
      </v-row>
</template>

<script>
import Card from './Card';

export default {
  name: 'App',

  components: {
    Card
  },

  data () {
    return {
      // contents: [
      //   {id: '1', name: 'John', prof: '英語が大変できます。時給1万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/8c45cf85becf84af9de3df62bb84a767.png'},
      //   {id: '2', name: 'Takahashi', prof: '日本語が大変できます。時給10万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/12012cd4efde1bff9b2692b403bd878b.png'},
      //   {id: '3', name: 'Higuchi', prof: 'ポルトガル語が大変できます。時給50万円からお受けします。', img: 'https://www.pokemon.jp/special/dragontype/img/lab/poke01.png'},
      //   {id: '4', name: 'Yama-chin', prof: '英語が大変できます。時給1万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/8c45cf85becf84af9de3df62bb84a767.png'},
      //   {id: '5', name: 'Fushigibana', prof: '日本語が大変できます。時給10万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/12012cd4efde1bff9b2692b403bd878b.png'},
      //   {id: '6', name: 'Drunk', prof: 'ポルトガル語が大変できます。時給50万円からお受けします。', img: 'https://www.pokemon.jp/special/dragontype/img/lab/poke01.png'},
      //   {id: '7', name: 'John', prof: '英語が大変できます。時給1万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/8c45cf85becf84af9de3df62bb84a767.png'},
      //   {id: '8', name: 'Takahashi', prof: '日本語が大変できます。時給10万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/12012cd4efde1bff9b2692b403bd878b.png'},
      //   {id: '9', name: 'Higuchi', prof: 'ポルトガル語が大変できます。時給50万円からお受けします。', img: 'https://www.pokemon.jp/special/dragontype/img/lab/poke01.png'},
      //   {id: '10', name: 'Yama-chin', prof: '英語が大変できます。時給1万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/8c45cf85becf84af9de3df62bb84a767.png'},
      //   {id: '11', name: 'Fushigibana', prof: '日本語が大変できます。時給10万円からお受けします。', img: 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/12012cd4efde1bff9b2692b403bd878b.png'},
      //   {id: '12', name: 'Drunk', prof: 'ポルトガル語が大変できます。時給50万円からお受けします。', img: 'https://www.pokemon.jp/special/dragontype/img/lab/poke01.png'}
      // ],
      contents: []
    }
  },

  mounted() {
    this.axios.get('https://21a05gdgaj.execute-api.ap-northeast-1.amazonaws.com/demo')
    .then((res) => {
      var data = res.data
      var len = data.length
      var arr = []
      for (var i = 0; i < len; i++) {
        arr.push(data[i])
      }
      this.contents = arr
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>
