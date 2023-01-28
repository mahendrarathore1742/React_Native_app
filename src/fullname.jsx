import { StyleSheet, Text, View} from 'react-native';


const Hello = ()=>{
	let name = "Mahendra Singh";

	return(
		<View>
		<Text style ={styles.textStyle} >
			Hello my name is {name} that it.
		</Text>
		</View>
		
	);
}

const styles = StyleSheet.create({
	textStyle : {
		fontSize:40,
		color:"red",
		fontWeight:"bold",

	}
})


export default Hello;