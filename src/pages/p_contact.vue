<template lang="">
  <c_section :_size="100" _type="full" class="c_sectionSplited">
    <div class="c_sectionSplited-left">
      <h2>Informations pratiques</h2>
      <div>
        <h4><c_textIcon :_name="'position'" :_size="'small'">Paris la Défense</c_textIcon></h4>
      </div>

      <div>
        <h4><c_textIcon :_name="'calendar'" :_size="'small'">Mercredi 12H30</c_textIcon></h4>
      </div>
      <div>
        <h2>Accès</h2>
        <br />
        <c_textIcon :_name="'rer'" :_size="'normal'">
          <c_textIcon :_name="'rer-a'" :_size="'small'"
            >Arrêt : La Défense Grande Arche</c_textIcon
          >
        </c_textIcon>
        <br />
        <c_textIcon :_name="'transilien'" :_size="'normal'">
          <c_textIcon :_name="'transilien-u'" :_size="'small'"></c_textIcon>
          <c_textIcon :_name="'transilien-l'" :_size="'small'"
            >Arrêt : La Défense Grande Arche</c_textIcon
          >
        </c_textIcon>
        <br />
        <c_textIcon :_name="'tramway'" :_size="'normal'">
          <c_textIcon :_name="'tramway-2'" :_size="'small'"
            >Arrêt : La Défense Grande Arche</c_textIcon
          >
        </c_textIcon>
        <br />
        <c_textIcon :_name="'metro'" :_size="'normal'">
          <c_textIcon :_name="'metro-1'" :_size="'small'"
            >Arrêt : La Défense Grande Arche ou Esplanade de La
            Défense</c_textIcon
          >
        </c_textIcon>
        <br />
        <c_textIcon :_name="'bus'" :_size="'normal'">
          <c_textIcon :_name="'bus-141'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-144'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-159'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-160'" :_size="'normal'"></c_textIcon>
          <!-- <c_textIcon :_name="'bus-161'" :_size="'normal'"></c_textIcon> -->
          <c_textIcon :_name="'bus-174'" :_size="'normal'"></c_textIcon>
          <!-- <c_textIcon :_name="'bus-246'" :_size="'normal'"></c_textIcon> -->
          <c_textIcon :_name="'bus-258'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-262'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-272'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-275'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-360'" :_size="'normal'"></c_textIcon>
          <c_textIcon :_name="'bus-378'" :_size="'normal'"></c_textIcon>
          <!-- <c_textIcon :_name="'bus-451'" :_size="'normal'"></c_textIcon> -->
          <p>Balabus</p>
        </c_textIcon>
        <br />
        <c_textIcon :_name="'bus'" :_size="'normal'">
          <c_textIcon :_name="'bus-n24'" :_size="'normal'"></c_textIcon>
          <!-- <c_textIcon :_name="'bus-n152'" :_size="'normal'"></c_textIcon> -->
        </c_textIcon>
      </div>
    </div>
    <div class="c_sectionSplited-right">
      <h2>Contacter nous</h2>
      <p>Visiteur, amateur ou professionel, participer avec nous !</p>
      <c_contactForm></c_contactForm>
    </div>
  </c_section>
</template>
<script>
import { c_section } from "@/components/ui/wrappers/index";
import { c_icon } from "@/components/ui/pictures/index";
import { c_textIcon } from "@/components/ui/texts/index";
import { c_contactForm } from "@/components/layout//forms/index";

export default {
  components: {
    c_section,
    c_icon,
    c_textIcon,
    c_contactForm,
  },
};
</script>
<style lang="scss">
.c_sectionSplited {
  display: flex;
  background-color: rgb(219, 219, 219);

  &-left,
  &-right {
    flex: 1 1 50%;
    padding: $m-1;
  }



  &-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &-right {
    background-color: white;
    border-top: 1px solid $c-3-50;
    border-right: 1px solid $c-3-50;
    border-bottom: 1px solid $c-3-50;

    h2 {
      color: $c-2-100;
      margin-bottom: $m-6;
    }

    p {
      color: $c-3-50;
    }
  }
}

@media screen and (max-width: 768px) {
  .c_sectionSplited {
    display: flex;
    flex-direction: column-reverse;
    gap: $m-1;

    &-left,
    &-right {
      flex: auto;
      padding: 0;
    }
  }
}
</style>
