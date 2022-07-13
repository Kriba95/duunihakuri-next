<?php
/**
 * Template Name: Template: Yhteystiedot
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header();
?>



<!-- Add your site or app content here -->
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <div class="template-example">
          <h2 class="template-title-example">VaTa Järjestöpalvelu Oy</h2>
          <p>Ilkantie 4, 00400 Helsinki</p>
          <p>asiakaspalvelu (at) jarjestopalvelu.fi</p>
          <br />
          <h4><b>Verkkolaskut</b></h4>
          <br />
          <p><b>Vata Järjestöpalvelun y-tunnus:</b> 2721922-1</p>
          <p><b>Verkkolaskuosoite</b> 003727219221</p>
          <p><b>OVT-Tunnus</b> 003727219221</p>
          <p><b>Operaattori:</b> Apix Messaging Oy</p>
          <p><b>Välittäjän tunnus:</b> 003723327487</p>
          <br />
          <span>
            Huomioittehan, että mikäli käytössänne on jokin seuraavista operaattoreista verkkolaskun lähettämiseen: <b>Danske Bank Oyj, Handelsbanken, Paikallisosuuspankit tai Säästöpankit, </b>tulee teidän käyttää Apixin verkkolaskuosoitteenamme seuravaa osoitetta: <br /> verkkolaskuosoite: 003723327487 ja operaattorituunus: DABAFIHH.
          </span>

        <hr />

      </div>

      <div class="template-example">
        <h2 class="template-title-example">Yhteystiedot</h2>

        <table class="table table-bordered">
          <tr><td><h4>Tapio Kauppinen
            <p>Controller</p>
            <p> 040 450 1946</p>
            <p>tapio.kauppinen@jarjestopalvelu.fi</p>
          </h4></td></tr>
          <tr><td><h4>Tuula Liukkonen
            <p>Palkanlaskenta</p>
            <p>050 374 8019</p>
            <p>tuula.liukkonen@jarjestopalvelu.fi</p>
          </h4></td></tr>
          <tr><td><h4>Milla Nokelainen
            <p>Palkanlaskenta ja kirjanpito</p>
            <p>050 356 4350</p>
            <p>milla.nokelainen@jarjestopalvelu.fi</p>
          </h4></td></tr>
          <tr><td><h4>Juhani Vahtola​
            <p>Kirjanpito</p>
            <p>0500 870 267</p>
            <p>juhani.vahtola@jarjestopalvelu.fi</p>
          </h4></td></tr>
          <tr><td><h4>Tarja Hannukkala
            <p>Kirjanpito</p>
            <p>044 752 5583</p>
            <p>tarja.hannukkala@jarjestopalvelu.fi</p>
          </h4></td></tr>
        </table>
      </div>
    </div>





    
    <div class="col-xs-12 col-md-6">
      <div class="template-example">
        <br />

        <div class="template-example">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9092.332791656767!2d24.901946000000002!3d60.221608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65b49be28fcd9f9c!2sValkea%20talo!5e1!3m2!1sfi!2sus!4v1620246481360!5m2!1sfi!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <form action="">
              <div class="row">
                <h2 class="text-center">Ota Yhteyttä</h2>

              </div>
              <?php
              echo do_shortcode(
                  '[contact-form-7 id="16" title="Yhteydenottolomake 1"]'
              );
              ?>
        </div>
      </div>
    </div>


  </div>
</div>


<?php
get_footer();
