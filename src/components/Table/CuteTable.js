import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './cutetable.component.styles'
import PropTypes from 'prop-types';

export default function OverlappingTable({title, imageLogo, data}) {
// it accepts an array of objects
// so we extract the keys from it to form the header
//should return an array of headers
    const tableHeaders = () => {
        let sampleData = data[0];
        let finalHeader = ["No."].concat(Object.keys(sampleData))
        return finalHeader
    }
    const capitalizer = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    };

    const tableColorizer = (index) => {
        console.log("the index", index)
        if(index%2===1){
            return "#F0F0F0"
        }
        else return "white"
    }

    const dataDisplay = (datum, data, index) => {
        console.log(datum)
        
        let headers = Object.keys(data[0])
        return (
            <View style={[styles.dataRowCont,{backgroundColor:tableColorizer(index)}]}>
               <Text style={styles.dataText}>{index+1}</Text>
                {headers.map((data)=>(
                    
                    
                    <Text style={styles.dataText}>{datum[data]}</Text>
                    
                ))}
                
                
            </View>
        )
    }

   
    return (
        <View style={styles.container}>
          
            <View style={styles.rowCont}>
                {tableHeaders().map((header, index) => (
                    <Text key={index} style={styles.eachRowText}>{capitalizer(header)}</Text>
                ))}
            </View>
            {data.map((datum, index) => (
                dataDisplay(datum, data, index)
            ))}
           
           
        </View>
    )
}

OverlappingTable.propTypes = {
    title: PropTypes.string.isRequired,
   data: PropTypes.array.isRequired,
}
