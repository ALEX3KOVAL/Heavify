<template>
  <section id="modal__container">

      <div id="modal__info">
        <h1 id="modal__info__title">
          {{ title }}
        </h1>
        <p id="modal__info__description">
          Грув-метал характеризуют среднетемповые риффы в пониженном строе, сосредоточенные на тяжести, ритме и синкопировании. Гитаристы играют низкочастотные пауэр-аккорды и соло на средних ладах, применяя технику палм-мьютинг (глушение струн ладонью правой руки). Тембр характерен сильными басами, обычно с резким искажением. Как и в большинстве других стилей метала, в груве басовые линии вторят риффам ритм-гитары, но иногда используются как введения в гитарный рифф или как интермедии, когда риффы гитары не акцентированы, также для баса повсеместно используется эффект дисторшн. В вокальных партиях чаще всего используется харш, гроулинг и чистый вокал. В грувовых ударных типично применение двух бас-бочек, с акцентом на волнообразном их использовании, а не на скоростных басовых перестуках и бластбитах, используемых в других экстремальных металлических стилях.
        </p>
        <button id="modal__close-btn" @click="close" type="reset">ЗАКРЫТЬ</button>
      </div>
    <div
      id="modal__guitar-img"
      :style="`background-image: url('${require(`../../../../assets/images/${guitarImageFileName}`)}');`"
    />
    <div
        id="modal__artist-img"
        :style="`background-image: url('${require(`../../../../assets/images/dimebag.jpg`)}');`"
    />
  </section>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      //required: true
    },
    guitarImageFileName: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$parent.$parent.$emit("onModalDeactivated");
    }
  }
}
</script>
