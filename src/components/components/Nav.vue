<template>
  <div>
    <back>导航栏</back>
    <input type="text" id="field">
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  created () {
    const params = this.$route.params
    console.log(params, this.$route.query)

    console.log(this.$store)

    this.increment(6) // [2] => this.$store.commit('increment', 6)
    console.log(this.$store.state.count)
  },
  mounted () {
    const field = document.getElementById('field')

    if (sessionStorage.getItem('autosave')) {
      field.value = sessionStorage.getItem('autosave')
    }

    field.addEventListener('change', function () {
      sessionStorage.setItem('autosave', field.value)
    })
  },
  data () {
    return {
      localCount: 10
    }
  },
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  methods: {
    ...mapMutations(['increment', 'incrementBy']), // [1]
    ...mapMutations({
      add: 'increment'
    })
  }
}
</script>
