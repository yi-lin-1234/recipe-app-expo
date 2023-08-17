import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Recipe } from "../type";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Image
              alt="recipe picture"
              resizeMode="cover"
              style={styles.cardImg}
              source={{ uri: recipe.recipePictureUrl }}
            />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{recipe.name}</Text>
            </View>

            <View style={styles.cardFooter}>
              <FontAwesome
                color="#ea266d"
                name="heart"
                solid={true}
                size={12}
              />
              <Text style={styles.cardStars}>{recipe.likes}</Text>
              <Feather name="map-pin" size={12} color="#7B7C7E" />
              <Text style={styles.cardStars}>{recipe.cuisine}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#232425",
  },

  cardFooter: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "#232425",
  },
});
