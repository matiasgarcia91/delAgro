import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, Text, ScrollView } from 'react-native';

import MainButton from '../../MainButton';

import styles from './styles';

// Comments:
// El boton ese Cerrar tiene que ser un boton me parece, no solo un texto para mantener la consistencia. hice un mini component button en el filteredScreen,
// mas arriba del componente, capaz que ese puede quedar bien aca.
// Agregaria margenes top y bottom a los titulos para que quede mas tipo parrafo.
// Capaz hacer todo el modal mas grande


export default class TermsModal extends PureComponent {
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <Text style={[styles.sideButtons, { marginBottom: 10 }]}>Términos y Condiciones</Text>
          <ScrollView>
            <View style={styles.titleContainer}>
              <Text style={styles.sideButtons}>Título I Disposiciones Generales</Text>
            </View>
            <Text>  Art. 1. Las partes que intervienen en una transacción serán por un lado los usuarios (en lo sucesivo “el Cliente vendedor o comprador) y por otro lado DELAGRO SRL,</Text>
            <Text>  Art. 2. Por el solo hecho de utilizar la aplicación, el cliente vendedor o comprador acepta expresamente todas y cada una de las condiciones establecidas en este reglamento, reconociéndolas como legales y vinculantes a su respecto.</Text>
            <Text>  Art. 3. La organización y funcionamiento de esta Aplicación estará a cargo del escritorio DelAgro & Cia Srl. quien será responsable de la administración, negociación y cierre de los lotes</Text>
            <Text>  Art. 4. Los lotes inscriptos en la aplicación para la venta, son condicionales hasta que DELAGRO apruebe los mismos. Este proceso será automático una vez el usuario cumpla con los pasos necesarios para publicar su lote,lo que se explica detalladamente en el manual de uso de la Aplicación.</Text>
            <Text>  Art. 5. La gestión y facturación tanto de las ventas, compras, comisiones y descuentos por bonificación acumulada, estarán a cargo de DelAgro & Cia srl. </Text>
            <Text>  Art. 6. Con respecto a la trazabilidad de los lotes, esta podrá ser consultada directamente con DelAgro & Cia</Text>
            <Text>  Art. 7. DELAGRO se reserva el derecho de exclusividad para la venta del lote inscripto por un lapso de 96 horas (4 días) desde el día que el vendedor sube el lote. Queda a criterio del vendedor mantenerlo o retirarlo de la venta, unas ves pasadas las 96 Hrs.</Text>
            <Text>  Art. 8. DELAGRO SRL es competente para interpretar y aclarar las dudas que pudieran plantearse, como así también para adoptar las decisiones que estime adecuadas ante cualquier eventualidad no prevista en el Reglamento, notificando lo resuelto al cliente por e-mail.</Text>
            <Text>  Art. 9. Como condición previa para vender o comprar en la aplicación, el Cliente deberá declarar tener capacidad plena para obligarse conforme al ordenamiento jurídico de nuestro país.</Text>
            <Text>  Art. 10. En caso de ocultamiento o falsedad de datos en la formulación de la declaración que realiza al registrarse como usuario, DELAGRO quedará exceptuada de toda responsabilidad en cuanto a los perjuicios que pudieran derivarse de la misma, en lo que refiera al Cliente o a terceras personas.</Text>
            <Text>  Art. 11. El Cliente acepta como válidas todas las comunicaciones que se le cursen por e-mail, siendo su responsabilidad mantener activa su casilla de correo y comunicar a la empresa los cambios que puedan operarse al respecto. </Text>
            <Text>  Art. 12. Los gastos totales para los vendedores y compradores serán de 3% del monto de la transacción más IVA para cada una de las partes.</Text>

            <View style={styles.titleContainer}>
              <Text style={styles.sideButtons}>  Título II
 Del registro en la aplicación</Text>
            </View>
            <Text>  Art. 13. Para poder vender es imprescindible registrarse en la misma. El registro será completamente gratuito, y no generará ningún compromiso con ninguna de las partes.</Text>
            <Text>  Art. 14. Para registrarse en la aplicación deberán generar un número de usuario y contraseña y completar los siguientes datos: Nombre y apellido, correo electrónico, contraseña, fecha de nacimiento, teléfono móvil, y departamento</Text>
            <Text>  Art. 15. Cada cliente tiene derecho a registrarse con solo una identidad, pero puede ofrecer varios lotes a la venta en forma simultánea.</Text>
            <Text>  Art. 16. DELAGRO se reserva el derecho de cerrar la cuenta de un cliente notificándoselo previamente por e-mail o por el medio que le sea posible.</Text>
            <Text>  Art. 17. El cliente deberá asegurarse de no divulgar la información de seguridad para el ingreso al sitio, ya que será responsable de todas las ofertas realizadas.</Text>
            <Text>  Art. 18. Se podrá ofrecer, como como mínimo la cantidad de 30 animales por lote, con un margen de tolerancia del 10%.</Text>
            <Text>  Art. 19. Pesada de animales: Los animales se pesaran en balanzas oficiales con la siguiente escala en su destare: Distancia a balanza: 1-70 km: 6% 71-150 km: 5% 151 km en adelante: 4% </Text>
            <View style={styles.titleContainer}>
              <Text style={styles.sideButtons}> Título III
 De la compra en  la aplicación</Text>
            </View>
            <Text>  Art. 20. Para comprar a través de la aplicación no es necesario estar registrado. Solo basta con haber instalado la aplicación en su celular.</Text>
            <Text>  Art. 21. Todo el que tenga la aplicación en su celular recibirá una comunicación a través de la misma, cada vez que un nuevo lote se sube a la venta.</Text>
            <Text>  Art. 22. La compra solo podrá realizarse a estableciendo un contacto con personal de Delagro a través de la aplicación o de e- mail.</Text>
            <View style={styles.titleContainer} >
              <Text style={styles.sideButtons}>  Título IV
              Beneficios de los usuarios de la aplicación</Text>
            </View>
            <Text>  Art. 23. Beneficios para vendedores y compradores. La bonificación consistente entre 1 a 5 dólares por animal vendido y/o comprado a través de la aplicación, según la escala que se muestra en el Art. 24</Text>
            <Text>  Art. 24. Dicho beneficio es acumulativo y podrá hacerse efectivo cuando el productor lo desee. Una vez que hace efectivo el cobro de la bonificación, vuelve a cero la cantidad de animales comercializados. Este beneficio podrá descontarse de las comisiones, de futuras ventas y/o compras en la aplicación.</Text>
            <Text>  Art. 25. DELAGRO llevara una cuenta corriente de los beneficios acumulados y utilizados por cada cliente.</Text>
            <Text>  Art. 26. Los montos acumulados no son trasferibles ni reembolsables y solo pueden ser utilizados por quien lo generó.</Text>
            <Text>  Art. 27. DELAGRO puede eventualmente ponerse en contacto con los clientes de la aplicación con el objeto de informarles sobre productos y servicios relacionados que puedan interesarle</Text>
            <View style={styles.titleContainer}>
              <Text style={styles.sideButtons}> Título V
De las responsabilidades</Text>
            </View>
            <Text>  Art. 28. El que publica un lote se hace responsable de la veracidad de la información.</Text>
            <Text>  Art. 29. En caso de duda Delagro se reserva de revisar el lote y condicionar la venta hasta la verificación de la información.</Text>
            <Text>  Art. 30. Se excluye todo derecho del Cliente a ser indemnizado por daños y perjuicios por Delagro y/o sus empleados, siempre que tales daños no se deban a un comportamiento premeditado o de negligencia grave.</Text>
            <Text>  Art. 31. Las condiciones establecidas en este reglamento, podrán ser modificadas con previo aviso.</Text>

          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <MainButton onPress={this.props.toggleModal} title={'Cerrar'} />
          </View>
        </View>
      </Modal>
    );
  }
}

TermsModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
