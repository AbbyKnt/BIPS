import React from "react";
import { Document, Page, Text, StyleSheet, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page1:{ padding: 40 },
  header:{textAlign: "center"}
})

const certificate = (props) => {
  return (
    <Document title={`${props.name} Barangay Certificate`}>
      <Page size="A4" style={styles.page1}>
        {/******Barangay Document Header******/}
        <View style={styles.header}>
          <Text>Barangay Certificate</Text>
          <Text>Iglanot, Sibalom, Antique</Text>
        </View>

        {/******Barangay Document Body******/}
        <View>
          <Text>This certificcate signifies that {props.name}</Text>


        </View>

        {/******Barangay Document Footer******/}
      </Page>
    </Document>
  )
}

export default certificate;