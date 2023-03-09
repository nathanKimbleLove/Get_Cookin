const exampleData =  [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d2fe0d280de91cd9cd5f3781fc5441a3",
                "label": "Skirt Steak and Hanger Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/28e/28e26b8817b74263d70dd9480c112d83.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6cbbd092729d5af7289a300626d2070bee72ebca0cf0a4b0321a9ba445657050",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/28e/28e26b8817b74263d70dd9480c112d83-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6fa07ff8477e1b578d245a7a8f9ba08cf9855298d277bfafd20c9abbf0c624bd",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/28e/28e26b8817b74263d70dd9480c112d83-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ebdd434d22e97aa0423557184fa17fb633b909206d5c69b2c33d22aef6fbd705",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/28e/28e26b8817b74263d70dd9480c112d83.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6cbbd092729d5af7289a300626d2070bee72ebca0cf0a4b0321a9ba445657050",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Cookstr",
                "url": "http://www.cookstr.com/recipes/skirt-steak-and-hanger-steak",
                "shareAs": "http://www.edamam.com/recipe/skirt-steak-and-hanger-steak-d2fe0d280de91cd9cd5f3781fc5441a3/steak",
                "yield": 2.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Sugar",
                    "Kidney-Friendly",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "5 to 6 ounces skirt steak or hanger steak",
                    "Salt",
                    "Mild-tasting olive oil, to coat, or as needed"
                ],
                "ingredients": [
                    {
                        "text": "5 to 6 ounces skirt steak or hanger steak",
                        "quantity": 5.5,
                        "measure": "ounce",
                        "food": "skirt steak",
                        "weight": 155.92237718750002,
                        "foodCategory": "meats",
                        "foodId": "food_agvdl6pajjrz8sbghz0cdaz6q4yf",
                        "image": "https://www.edamam.com/food-img/e1d/e1dc9aaf420f55f30dd24768e532594a.jpg"
                    },
                    {
                        "text": "Salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 0.9355342631250001,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Mild-tasting olive oil, to coat, or as needed",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "olive oil",
                        "weight": 2.12054432975,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    }
                ],
                "calories": 322.79424739061506,
                "totalWeight": 158.72957639384703,
                "totalTime": 0.5,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "sandwiches"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 322.79424739061506,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 22.0474241343125,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 8.141937228670631,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.0680682837343751,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 10.918105217397649,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 1.1524422478570926,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 31.2780288638125,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 101.34954517187501,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 367.52565312993465,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 9.54134524493078,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 31.191341986265975,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 396.1189758896753,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 2.66482142152687,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 9.309252572970347,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 224.52822315000003,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 6.236895087500001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.082638859909375,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.4287865372656251,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 7.9146198660375005,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.65799243173125,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 4.677671315625,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 4.677671315625,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.8356904788125004,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.15592237718750002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.569366152537875,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.615403344322,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 103.76771532803444,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 16.139712369530752,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 33.919114052788466,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 40.70968614335315,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 62.556057727625,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 33.783181723958336,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 15.313568880413944,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 0.9541345244930779,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 7.426509996729994,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 8.428063316801603,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 14.804563452927056,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 84.62956884518498,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 32.07546045000001,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.6929883430555557,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 6.886571659114583,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 32.983579789663466,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 49.466374162734375,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 50.61480244086539,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1.16941782890625,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 159.8204366171875,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.0394825145833335,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.7957743502525,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.012836120268333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 22.0474241343125,
                        "hasRDI": true,
                        "daily": 33.919114052788466,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 8.141937228670631,
                                "hasRDI": true,
                                "daily": 40.70968614335315,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.0680682837343751,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 10.918105217397649,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 1.1524422478570926,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.0,
                                "hasRDI": true,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 31.2780288638125,
                        "hasRDI": true,
                        "daily": 62.556057727625,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 101.34954517187501,
                        "hasRDI": true,
                        "daily": 33.783181723958336,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 367.52565312993465,
                        "hasRDI": true,
                        "daily": 15.313568880413944,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 9.54134524493078,
                        "hasRDI": true,
                        "daily": 0.9541345244930779,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 31.191341986265975,
                        "hasRDI": true,
                        "daily": 7.426509996729994,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 396.1189758896753,
                        "hasRDI": true,
                        "daily": 8.428063316801603,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 2.66482142152687,
                        "hasRDI": true,
                        "daily": 14.804563452927056,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 9.309252572970347,
                        "hasRDI": true,
                        "daily": 84.62956884518498,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 224.52822315000003,
                        "hasRDI": true,
                        "daily": 32.07546045000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 6.236895087500001,
                        "hasRDI": true,
                        "daily": 0.6929883430555557,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.082638859909375,
                        "hasRDI": true,
                        "daily": 6.886571659114583,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.4287865372656251,
                        "hasRDI": true,
                        "daily": 32.983579789663466,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 7.9146198660375005,
                        "hasRDI": true,
                        "daily": 49.466374162734375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.65799243173125,
                        "hasRDI": true,
                        "daily": 50.61480244086539,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 4.677671315625,
                        "hasRDI": true,
                        "daily": 1.16941782890625,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 4.677671315625,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.8356904788125004,
                        "hasRDI": true,
                        "daily": 159.8204366171875,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.15592237718750002,
                        "hasRDI": true,
                        "daily": 1.0394825145833335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.569366152537875,
                        "hasRDI": true,
                        "daily": 3.7957743502525,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 3.615403344322,
                        "hasRDI": true,
                        "daily": 3.012836120268333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 103.76771532803444,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/d2fe0d280de91cd9cd5f3781fc5441a3?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_11ad0ac0b2f5870cadb46890c2d8d8de",
                "label": "Salt-And-Pepper Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/69a/69a185e15ae107444f63acfeef439fdd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a1e816c87b67aa43a68ead5dfc3ad442761d104f42ac737f1ac3a6f31cac6cab",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/69a/69a185e15ae107444f63acfeef439fdd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b5c65f11e847702728afb70d22eaa55cc4bfdb683938075c50d45db1d5053309",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/69a/69a185e15ae107444f63acfeef439fdd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=85dd572a457a089bd60236c65249e3c5628796da7bf4c2c400db749b9e7b9277",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/69a/69a185e15ae107444f63acfeef439fdd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a1e816c87b67aa43a68ead5dfc3ad442761d104f42ac737f1ac3a6f31cac6cab",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/salt-and-pepper-steak-51236360",
                "shareAs": "http://www.edamam.com/recipe/salt-and-pepper-steak-11ad0ac0b2f5870cadb46890c2d8d8de/steak",
                "yield": 6.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 1/2 pound skirt steak, cut into 4 pieces",
                    "Salt",
                    "Pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 pound skirt steak, cut into 4 pieces",
                        "quantity": 1.5,
                        "measure": "pound",
                        "food": "skirt steak",
                        "weight": 680.388555,
                        "foodCategory": "meats",
                        "foodId": "food_agvdl6pajjrz8sbghz0cdaz6q4yf",
                        "image": "https://www.edamam.com/food-img/e1d/e1dc9aaf420f55f30dd24768e532594a.jpg"
                    },
                    {
                        "text": "Salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 4.08233133,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Pepper",
                        "weight": 2.041165665,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 1331.88100806915,
                "totalWeight": 685.3821843445734,
                "totalTime": 0.0,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1331.88100806915,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 87.02019932967899,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 34.279172884756804,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 4.66066160175,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.90643636976435,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 4.0754866211367,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.3053254427675,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.7889105295225001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.516414913245,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.013063460256,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 136.6980212455935,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 442.25256075000004,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1586.9766668120446,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 50.5742684790476,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 139.59762892394576,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1755.5502184822158,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.774545751214092,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 40.64643906859307,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 982.9845609507001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 27.766656929550003,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3628103930682,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.8747426244470002,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 34.55985357535095,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.87717949418515,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 20.75865481305,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 20.75865481305,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 16.737558453000002,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.6803885550000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.1778886664160002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 13.547216518604998,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 453.0588175217182,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 66.5940504034575,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 133.87722973796767,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 171.39586442378402,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.4351084809225,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.06565965298,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 273.396042491187,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 147.41752025000002,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 66.12402778383519,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 5.05742684790476,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 33.237530696177565,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 37.35213230813225,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 65.41414306230051,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 369.51308244175516,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 140.4263658501,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3.085184103283334,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 30.23419942235,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 144.2109711113077,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 215.99908484594343,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 221.32149955270384,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 5.1896637032625,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 697.3982688750001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.535923700000001,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.852591109440001,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 11.2893470988375,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 87.02019932967899,
                        "hasRDI": true,
                        "daily": 133.87722973796767,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 34.279172884756804,
                                "hasRDI": true,
                                "daily": 171.39586442378402,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 4.66066160175,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 40.90643636976435,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 4.0754866211367,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 1.3053254427675,
                        "hasRDI": true,
                        "daily": 0.4351084809225,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.7889105295225001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.516414913245,
                                "hasRDI": true,
                                "daily": 2.06565965298,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.013063460256,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 136.6980212455935,
                        "hasRDI": true,
                        "daily": 273.396042491187,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 442.25256075000004,
                        "hasRDI": true,
                        "daily": 147.41752025000002,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1586.9766668120446,
                        "hasRDI": true,
                        "daily": 66.12402778383519,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 50.5742684790476,
                        "hasRDI": true,
                        "daily": 5.05742684790476,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 139.59762892394576,
                        "hasRDI": true,
                        "daily": 33.237530696177565,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1755.5502184822158,
                        "hasRDI": true,
                        "daily": 37.35213230813225,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.774545751214092,
                        "hasRDI": true,
                        "daily": 65.41414306230051,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 40.64643906859307,
                        "hasRDI": true,
                        "daily": 369.51308244175516,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 982.9845609507001,
                        "hasRDI": true,
                        "daily": 140.4263658501,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 27.766656929550003,
                        "hasRDI": true,
                        "daily": 3.085184103283334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3628103930682,
                        "hasRDI": true,
                        "daily": 30.23419942235,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.8747426244470002,
                        "hasRDI": true,
                        "daily": 144.2109711113077,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 34.55985357535095,
                        "hasRDI": true,
                        "daily": 215.99908484594343,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.87717949418515,
                        "hasRDI": true,
                        "daily": 221.32149955270384,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 20.75865481305,
                        "hasRDI": true,
                        "daily": 5.1896637032625,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 20.75865481305,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 16.737558453000002,
                        "hasRDI": true,
                        "daily": 697.3982688750001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.6803885550000001,
                        "hasRDI": true,
                        "daily": 4.535923700000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.1778886664160002,
                        "hasRDI": true,
                        "daily": 7.852591109440001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 13.547216518604998,
                        "hasRDI": true,
                        "daily": 11.2893470988375,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 453.0588175217182,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/11ad0ac0b2f5870cadb46890c2d8d8de?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f445cd8ddcd858402909040855fad197",
                "label": "Pan-Fried Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4c8/4c82dad530271be7c5e91205e2fc5931.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=87ba1028f39582a809131b6dc867cf8dfcd4d74be2858ebd1c7507909546e21e",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4c8/4c82dad530271be7c5e91205e2fc5931-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=41af882fbbd1caaeb3d6c75fd9fa485ef581ed1a21aee6fdac92585b02461675",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4c8/4c82dad530271be7c5e91205e2fc5931-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c9e0bffbdf2519f534bdcf7db0a95043c57b9792e8f58046719be6479ae562c2",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4c8/4c82dad530271be7c5e91205e2fc5931.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=87ba1028f39582a809131b6dc867cf8dfcd4d74be2858ebd1c7507909546e21e",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/315499/pan-fried-steak",
                "shareAs": "http://www.edamam.com/recipe/pan-fried-steak-f445cd8ddcd858402909040855fad197/steak",
                "yield": 6.0,
                "dietLabels": [
                    "Low-Carb",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Kidney-Friendly",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "FODMAP-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 inch-thick boneless shell steak",
                    "Olive oil",
                    "Coarse salt and freshly ground pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 inch-thick boneless shell steak",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "shell steak",
                        "weight": 301.0,
                        "foodCategory": "meats",
                        "foodId": "food_a1qm1qga3rhbanbowi34ja6x6xyl",
                        "image": "https://www.edamam.com/food-img/818/818522f7f285ce65fd11f956d119cb50.jpg"
                    },
                    {
                        "text": "Olive oil",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Olive oil",
                        "weight": 4.0935999999999995,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "Coarse salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Coarse salt",
                        "weight": 1.806,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Coarse salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 0.903,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 1118.3546640000002,
                "totalWeight": 349.12191783693174,
                "totalTime": 0.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1118.3546640000002,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 97.05678780000001,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 27.102090568,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 55.549141693500005,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 6.639006650500001,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.5774685,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.3490095000000001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.228459,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.0057792,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 58.247021700000005,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 246.82000000000002,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 808.009769238,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 22.91486978086362,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 58.75075567836933,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 921.6094389269547,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.194383333861875,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 9.644408267836932,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 501.0867400000001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.24380999999999997,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.27187524,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.4230254000000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.899821290000002,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.2066277300000001,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 0.15351,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 18.213510000000003,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 8.3979,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.546727424999999,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 33.418133700000006,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 185.20073893567388,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 55.91773320000001,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 149.31813507692308,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 135.51045284000003,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.1924895,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.913836,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 116.49404340000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 82.27333333333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 33.66707371825,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2.291486978086362,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 13.988275161516508,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 19.608711466530952,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 28.85768518812153,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 87.67643879851757,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 71.58382,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.027089999999999996,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 22.656270000000003,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 32.540415384615386,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 74.37388306250001,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 92.8175176923077,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 0.0383775,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 349.9125,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 43.64484949999999,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 27.848444750000006,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 97.05678780000001,
                        "hasRDI": true,
                        "daily": 149.31813507692308,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 27.102090568,
                                "hasRDI": true,
                                "daily": 135.51045284000003,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 55.549141693500005,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 6.639006650500001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0.5774685,
                        "hasRDI": true,
                        "daily": 0.1924895,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.3490095000000001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.228459,
                                "hasRDI": true,
                                "daily": 0.913836,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.0057792,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 58.247021700000005,
                        "hasRDI": true,
                        "daily": 116.49404340000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 246.82000000000002,
                        "hasRDI": true,
                        "daily": 82.27333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 808.009769238,
                        "hasRDI": true,
                        "daily": 33.66707371825,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 22.91486978086362,
                        "hasRDI": true,
                        "daily": 2.291486978086362,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 58.75075567836933,
                        "hasRDI": true,
                        "daily": 13.988275161516508,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 921.6094389269547,
                        "hasRDI": true,
                        "daily": 19.608711466530952,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.194383333861875,
                        "hasRDI": true,
                        "daily": 28.85768518812153,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 9.644408267836932,
                        "hasRDI": true,
                        "daily": 87.67643879851757,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 501.0867400000001,
                        "hasRDI": true,
                        "daily": 71.58382,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0.24380999999999997,
                        "hasRDI": true,
                        "daily": 0.027089999999999996,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.27187524,
                        "hasRDI": true,
                        "daily": 22.656270000000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.4230254000000001,
                        "hasRDI": true,
                        "daily": 32.540415384615386,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 11.899821290000002,
                        "hasRDI": true,
                        "daily": 74.37388306250001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.2066277300000001,
                        "hasRDI": true,
                        "daily": 92.8175176923077,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 0.15351,
                        "hasRDI": true,
                        "daily": 0.0383775,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 18.213510000000003,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 8.3979,
                        "hasRDI": true,
                        "daily": 349.9125,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 6.546727424999999,
                        "hasRDI": true,
                        "daily": 43.64484949999999,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 33.418133700000006,
                        "hasRDI": true,
                        "daily": 27.848444750000006,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 185.20073893567388,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/f445cd8ddcd858402909040855fad197?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b3a023e49ddfe32818f9eaf0637e52ac",
                "label": "Steak Bites",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/705/705f9836e39fcd98464340791e9ca8bc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ec753a7bbfc0a96c56e3271b6098b184e06947404eedfd86f5415b529b462bf0",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/705/705f9836e39fcd98464340791e9ca8bc-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e6424c79154a63ab052f2a84dca2b160b1d379774ad7dfd2d468e54a540d28e9",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/705/705f9836e39fcd98464340791e9ca8bc-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0c133978a41e245f2d36834280ea52443be2a47f2c5b24bede26867177f08ebb",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/705/705f9836e39fcd98464340791e9ca8bc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ec753a7bbfc0a96c56e3271b6098b184e06947404eedfd86f5415b529b462bf0",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/705/705f9836e39fcd98464340791e9ca8bc-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5a4d39f2769a94f97777c661b0f8a73e16fcfe2d23cf8ed87b78521cd3a17b2e",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Pioneer Woman",
                "url": "http://thepioneerwoman.com/cooking/2009/01/steak-bites/",
                "shareAs": "http://www.edamam.com/recipe/steak-bites-b3a023e49ddfe32818f9eaf0637e52ac/steak",
                "yield": 2.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "FODMAP-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 lb Sirloin Steak (without Much Gristle) OR Pre-cut Beef Tips",
                    "Kosher Salt To Taste",
                    "Fresh Ground Black Pepper To Taste",
                    "2 tbsp Butter"
                ],
                "ingredients": [
                    {
                        "text": "1 lb Sirloin Steak (without Much Gristle) OR Pre-cut Beef Tips",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "Beef Tips",
                        "weight": 453.59237,
                        "foodCategory": "meats",
                        "foodId": "food_bx2lgazb3757gsadoi85nbp72s8x",
                        "image": "https://www.edamam.com/food-img/58f/58f4bc64486057452caaf30a5443396e.jpg"
                    },
                    {
                        "text": "Kosher Salt To Taste",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Kosher Salt",
                        "weight": 2.89195422,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Fresh Ground Black Pepper To Taste",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Black Pepper",
                        "weight": 1.44597711,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "2 tbsp Butter",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "Butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    }
                ],
                "calories": 1109.9062188461,
                "totalWeight": 485.65138554700746,
                "totalTime": 0.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "bread"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1109.9062188461,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 81.278279924786,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 37.4696954493712,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.9309519999999999,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 30.882870883842905,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 3.1919639385578007,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.941742361845,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.5759101530149999,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.36583220883000006,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.026294253503999998,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 88.751430697729,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 355.89504050000005,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1124.2262074373627,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 36.4324263221818,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 98.31714894247008,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1504.921205066861,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 9.179875567223126,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 19.86696673504601,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 879.9979942338001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 194.64641381969997,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.5019332622788001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.828725024798,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 14.2712559363673,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.8647885103901,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 32.8492820087,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 32.8492820087,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 13.6560511,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.42599999999999993,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.6739181619439999,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.35506452907,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 302.06504251578014,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 55.495310942305004,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 125.04350757659385,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 187.34847724685602,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.313914120615,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.46332883532,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 177.502861395458,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 118.63168016666668,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 46.84275864322345,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 3.6432426322181795,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 23.4088449863024,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 32.01960010780555,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 50.99930870679515,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 180.60878850041829,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 125.71399917625716,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 21.627379313299993,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 41.82777185656668,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 63.748078830615384,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 89.19534960229562,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 143.4452700300077,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 8.212320502175,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 569.0021291666668,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.8399999999999994,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.492787746293333,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.6292204408916664,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 81.278279924786,
                        "hasRDI": true,
                        "daily": 125.04350757659385,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 37.4696954493712,
                                "hasRDI": true,
                                "daily": 187.34847724685602,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.9309519999999999,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 30.882870883842905,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 3.1919639385578007,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0.941742361845,
                        "hasRDI": true,
                        "daily": 0.313914120615,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.5759101530149999,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.36583220883000006,
                                "hasRDI": true,
                                "daily": 1.46332883532,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.026294253503999998,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 88.751430697729,
                        "hasRDI": true,
                        "daily": 177.502861395458,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 355.89504050000005,
                        "hasRDI": true,
                        "daily": 118.63168016666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1124.2262074373627,
                        "hasRDI": true,
                        "daily": 46.84275864322345,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 36.4324263221818,
                        "hasRDI": true,
                        "daily": 3.6432426322181795,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 98.31714894247008,
                        "hasRDI": true,
                        "daily": 23.4088449863024,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1504.921205066861,
                        "hasRDI": true,
                        "daily": 32.01960010780555,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 9.179875567223126,
                        "hasRDI": true,
                        "daily": 50.99930870679515,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 19.86696673504601,
                        "hasRDI": true,
                        "daily": 180.60878850041829,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 879.9979942338001,
                        "hasRDI": true,
                        "daily": 125.71399917625716,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 194.64641381969997,
                        "hasRDI": true,
                        "daily": 21.627379313299993,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.5019332622788001,
                        "hasRDI": true,
                        "daily": 41.82777185656668,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.828725024798,
                        "hasRDI": true,
                        "daily": 63.748078830615384,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 14.2712559363673,
                        "hasRDI": true,
                        "daily": 89.19534960229562,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.8647885103901,
                        "hasRDI": true,
                        "daily": 143.4452700300077,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 32.8492820087,
                        "hasRDI": true,
                        "daily": 8.212320502175,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 32.8492820087,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 13.6560511,
                        "hasRDI": true,
                        "daily": 569.0021291666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.42599999999999993,
                        "hasRDI": true,
                        "daily": 2.8399999999999994,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.6739181619439999,
                        "hasRDI": true,
                        "daily": 4.492787746293333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 4.35506452907,
                        "hasRDI": true,
                        "daily": 3.6292204408916664,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 302.06504251578014,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/b3a023e49ddfe32818f9eaf0637e52ac?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f5dad3feaed948e9efc446a2c87f921e",
                "label": "Rump steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d448a14468adae3c7ce7986ff99df4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2382a8e46e1fcf98bbea4207e089593e63062436c2baafcfe0d47fb59722b246",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d448a14468adae3c7ce7986ff99df4-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=daf58b6beaee83a7d55d958fd270653f15e706506c2e712a6ebddb064cb0e16b",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d448a14468adae3c7ce7986ff99df4-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=02b3849372854b5e8ae4d676d3b622625c699b9fc73077ddb4114b9136fa762a",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d448a14468adae3c7ce7986ff99df4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2382a8e46e1fcf98bbea4207e089593e63062436c2baafcfe0d47fb59722b246",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "BBC Good Food",
                "url": "https://www.bbcgoodfood.com/recipes/rump-steak",
                "shareAs": "http://www.edamam.com/recipe/rump-steak-f5dad3feaed948e9efc446a2c87f921e/steak",
                "yield": 2.0,
                "dietLabels": [
                    "Low-Carb",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "2 x 200g rump steak about 2-3cm thick",
                    "1 tbsp sunflower oil",
                    "1 tbsp unsalted butter",
                    "1 large garlic clove , bashed once",
                    "1 sprig thyme or rosemary (optional)"
                ],
                "ingredients": [
                    {
                        "text": "2 x 200g rump steak about 2-3cm thick",
                        "quantity": 400.0,
                        "measure": "gram",
                        "food": "rump steak",
                        "weight": 400.0,
                        "foodCategory": "meats",
                        "foodId": "food_a94xddzbba3iwnax9cx3nan3xvea",
                        "image": "https://www.edamam.com/food-img/634/634aa9adfb65afb5fef3df13d7334985.jpg"
                    },
                    {
                        "text": "1 tbsp sunflower oil",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "sunflower oil",
                        "weight": 13.6,
                        "foodCategory": "Oils",
                        "foodId": "food_b09yz1nbx49rv1bss5kgxat77cvn",
                        "image": "https://www.edamam.com/food-img/be4/be4dba2bb618ecda2213ac422ae05289.jpg"
                    },
                    {
                        "text": "1 tbsp unsalted butter",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 14.2,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1 large garlic clove , bashed once",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 5.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 sprig thyme or rosemary (optional)",
                        "quantity": 1.0,
                        "measure": "sprig",
                        "food": "thyme",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                        "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                    }
                ],
                "calories": 1008.678,
                "totalWeight": 435.8,
                "totalTime": 15.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "sandwiches"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1008.678,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 72.82102,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 27.833996,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.46547599999999995,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 29.855082000000003,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.229796,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 2.39502,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 1.8700200000000002,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.525,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.05852,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 81.78869999999999,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 324.53,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 210.442,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 87.328,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 92.574,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1292.2079999999999,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.824140000000001,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 15.021079999999998,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 786.478,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 104.26799999999999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 6.3629999999999995,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.32183,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.5850179999999999,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 24.768163999999995,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.467736,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 45.046,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 45.046,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 6.92334,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.21299999999999997,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.331519999999999,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.301399999999999,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 267.40417999999994,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 50.4339,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 112.03233846153847,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 139.16997999999998,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.79834,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.1,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 163.57739999999998,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 108.17666666666665,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8.768416666666667,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 8.732800000000001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 22.041428571428572,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 27.49378723404255,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 43.46744444444445,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 136.5552727272727,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 112.35399999999998,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 11.585333333333333,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 7.069999999999999,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 26.819166666666668,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 45.00138461538461,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 154.80102499999998,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 189.82584615384613,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 11.261500000000002,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 288.47249999999997,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.4199999999999997,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 48.876799999999996,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.084499999999999,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 72.82102,
                        "hasRDI": true,
                        "daily": 112.03233846153847,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 27.833996,
                                "hasRDI": true,
                                "daily": 139.16997999999998,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.46547599999999995,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 29.855082000000003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 7.229796,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 2.39502,
                        "hasRDI": true,
                        "daily": 0.79834,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 1.8700200000000002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.525,
                                "hasRDI": true,
                                "daily": 2.1,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.05852,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 81.78869999999999,
                        "hasRDI": true,
                        "daily": 163.57739999999998,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 324.53,
                        "hasRDI": true,
                        "daily": 108.17666666666665,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 210.442,
                        "hasRDI": true,
                        "daily": 8.768416666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 87.328,
                        "hasRDI": true,
                        "daily": 8.732800000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 92.574,
                        "hasRDI": true,
                        "daily": 22.041428571428572,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1292.2079999999999,
                        "hasRDI": true,
                        "daily": 27.49378723404255,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.824140000000001,
                        "hasRDI": true,
                        "daily": 43.46744444444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 15.021079999999998,
                        "hasRDI": true,
                        "daily": 136.5552727272727,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 786.478,
                        "hasRDI": true,
                        "daily": 112.35399999999998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 104.26799999999999,
                        "hasRDI": true,
                        "daily": 11.585333333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 6.3629999999999995,
                        "hasRDI": true,
                        "daily": 7.069999999999999,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.32183,
                        "hasRDI": true,
                        "daily": 26.819166666666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.5850179999999999,
                        "hasRDI": true,
                        "daily": 45.00138461538461,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 24.768163999999995,
                        "hasRDI": true,
                        "daily": 154.80102499999998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.467736,
                        "hasRDI": true,
                        "daily": 189.82584615384613,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 45.046,
                        "hasRDI": true,
                        "daily": 11.261500000000002,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 45.046,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 6.92334,
                        "hasRDI": true,
                        "daily": 288.47249999999997,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.21299999999999997,
                        "hasRDI": true,
                        "daily": 1.4199999999999997,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 7.331519999999999,
                        "hasRDI": true,
                        "daily": 48.876799999999996,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 7.301399999999999,
                        "hasRDI": true,
                        "daily": 6.084499999999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 267.40417999999994,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/f5dad3feaed948e9efc446a2c87f921e?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4d0335d34d2ed7ce31df104b8bcb2df1",
                "label": "Steak Teriyaki recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1ab/1abd0d75240a799f4985de6b17f6645f?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a5a6f200bf74a452b400fd1486bf6f519dd6f9d6cb04899409082f4c888f6a9f",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1ab/1abd0d75240a799f4985de6b17f6645f-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3d3627619f30f91e3b45967a72c27d682c24deece7ccf3f3897a7bdaf1d0b595",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1ab/1abd0d75240a799f4985de6b17f6645f-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ebc39879a8ae55cd3afcd312d4c343b3108e13df1b9de9cd272386a9620fb4b9",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1ab/1abd0d75240a799f4985de6b17f6645f?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a5a6f200bf74a452b400fd1486bf6f519dd6f9d6cb04899409082f4c888f6a9f",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Simply Recipes",
                "url": "http://www.simplyrecipes.com/recipes/steak_teriyaki/",
                "shareAs": "http://www.edamam.com/recipe/steak-teriyaki-recipes-4d0335d34d2ed7ce31df104b8bcb2df1/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1/3 cup mirin rice wine",
                    "1/3 cup sake",
                    "1/3 cup soy sauce (if cooking gluten-free, use gluten-free soy sauce)",
                    "1 Tbsp sugar",
                    "1 Tbsp fresh grated ginger",
                    "1 1/2 to 2 lb flank steak or skirt steak",
                    "olive oil"
                ],
                "ingredients": [
                    {
                        "text": "1/3 cup mirin rice wine",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "rice wine",
                        "weight": 77.6,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                    },
                    {
                        "text": "1/3 cup sake",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "sake",
                        "weight": 77.6,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_b4lx3glaxob844b6jpzb8ay9men8",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                    },
                    {
                        "text": "1/3 cup soy sauce (if cooking gluten-free, use gluten-free soy sauce)",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "soy sauce",
                        "weight": 85.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "1 Tbsp sugar",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 12.4999999997887,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 Tbsp fresh grated ginger",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "ginger",
                        "weight": 5.99999999989856,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "1 1/2 to 2 lb flank steak or skirt steak",
                        "quantity": 1.75,
                        "measure": "pound",
                        "food": "flank steak",
                        "weight": 793.7866475000001,
                        "foodCategory": "meats",
                        "foodId": "food_abhe6ejbfw25i1a4u0iiwbi0aw6s",
                        "image": "https://www.edamam.com/food-img/f8d/f8dedaeb7292857a4d92019961fb91fb.jpg"
                    },
                    {
                        "text": "olive oil",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "olive oil",
                        "weight": 14.313818405995745,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    }
                ],
                "calories": 1742.4751230831034,
                "totalWeight": 1066.800465905683,
                "totalTime": 75.0,
                "cuisineType": [
                    "japanese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1742.4751230831034,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 80.648231483745,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 29.38075631892469,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 37.3575337326984,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 4.398218379987776,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 25.514199999770717,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 24.714199999772745,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.7999999999979712,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 12.916999999787398,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 12.474999999789123,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 176.24572659949817,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 539.7749203000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5101.990066018106,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 251.36053300904163,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 249.42506244995639,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3053.3390749336345,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 13.813800419322863,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 31.03546126974964,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1684.4602296749656,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.299999999994928,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.47407052259997473,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.8590729827499255,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 56.222482421949245,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.667921757224838,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 107.81439769998886,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 107.81439769998886,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 9.3666824405,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.7937866475000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.689128878010126,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 18.94214509790934,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 738.25440535342,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 87.12375615415517,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 124.07420228268461,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 146.90378159462347,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 8.504733333256906,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.199999999991885,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 352.49145319899634,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 179.92497343333335,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 212.58291941742107,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 25.136053300904166,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 59.386919630941996,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 64.96466116880073,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 76.7433356629048,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 282.140556997724,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 240.63717566785223,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.33333333332769777,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 39.505876883331226,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 66.08253713460965,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 351.3905151371828,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 359.07090440191064,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 26.953599424997215,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 390.27843502083334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.291910983333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 31.260859186734177,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 15.78512091492445,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 80.648231483745,
                        "hasRDI": true,
                        "daily": 124.07420228268461,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 29.38075631892469,
                                "hasRDI": true,
                                "daily": 146.90378159462347,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 37.3575337326984,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 4.398218379987776,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 25.514199999770717,
                        "hasRDI": true,
                        "daily": 8.504733333256906,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 24.714199999772745,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.7999999999979712,
                                "hasRDI": true,
                                "daily": 3.199999999991885,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 12.916999999787398,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 12.474999999789123,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 176.24572659949817,
                        "hasRDI": true,
                        "daily": 352.49145319899634,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 539.7749203000001,
                        "hasRDI": true,
                        "daily": 179.92497343333335,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5101.990066018106,
                        "hasRDI": true,
                        "daily": 212.58291941742107,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 251.36053300904163,
                        "hasRDI": true,
                        "daily": 25.136053300904166,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 249.42506244995639,
                        "hasRDI": true,
                        "daily": 59.386919630941996,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3053.3390749336345,
                        "hasRDI": true,
                        "daily": 64.96466116880073,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 13.813800419322863,
                        "hasRDI": true,
                        "daily": 76.7433356629048,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 31.03546126974964,
                        "hasRDI": true,
                        "daily": 282.140556997724,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1684.4602296749656,
                        "hasRDI": true,
                        "daily": 240.63717566785223,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.299999999994928,
                        "hasRDI": true,
                        "daily": 0.33333333332769777,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.47407052259997473,
                        "hasRDI": true,
                        "daily": 39.505876883331226,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.8590729827499255,
                        "hasRDI": true,
                        "daily": 66.08253713460965,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 56.222482421949245,
                        "hasRDI": true,
                        "daily": 351.3905151371828,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.667921757224838,
                        "hasRDI": true,
                        "daily": 359.07090440191064,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 107.81439769998886,
                        "hasRDI": true,
                        "daily": 26.953599424997215,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 107.81439769998886,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 9.3666824405,
                        "hasRDI": true,
                        "daily": 390.27843502083334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.7937866475000002,
                        "hasRDI": true,
                        "daily": 5.291910983333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.689128878010126,
                        "hasRDI": true,
                        "daily": 31.260859186734177,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 18.94214509790934,
                        "hasRDI": true,
                        "daily": 15.78512091492445,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 738.25440535342,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/4d0335d34d2ed7ce31df104b8bcb2df1?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7e3aad53d00b9acccaef151afa67b7e6",
                "label": "Perfect Porterhouse Steak recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d30/d30083c0e56c915a136b8637e623ef3e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3715be9562b6f800a5d7de6c403948aaf56ce7aff789c7388ba54830dffa8733",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d30/d30083c0e56c915a136b8637e623ef3e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=778d9f545b88a47f3841bbd9bd63b4381bdcfd183bc2d712444b1f4b9c71c0ba",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d30/d30083c0e56c915a136b8637e623ef3e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dd3813d6ad095269cc708734736332dc458e879fd37136ed7cb61dee1ec3d84a",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d30/d30083c0e56c915a136b8637e623ef3e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3715be9562b6f800a5d7de6c403948aaf56ce7aff789c7388ba54830dffa8733",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Bon Appetit",
                "url": "http://www.bonappetit.com/recipe/perfect-porterhouse-steak",
                "shareAs": "http://www.edamam.com/recipe/perfect-porterhouse-steak-recipes-7e3aad53d00b9acccaef151afa67b7e6/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "FODMAP-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "2”-thick Porterhouse steak, trimmed (about 2 lb.)",
                    "vegetable oil",
                    "ground black pepper",
                    "kosher salt",
                    "unsalted butter"
                ],
                "ingredients": [
                    {
                        "text": "2”-thick Porterhouse steak, trimmed (about 2 lb.)",
                        "quantity": 2.0,
                        "measure": "pound",
                        "food": "Porterhouse steak",
                        "weight": 907.18474,
                        "foodCategory": "meats",
                        "foodId": "food_bwbjyozb6nminjbvtqrwnawt5rnc",
                        "image": "https://www.edamam.com/food-img/a74/a74f4d1a191fdf11e28bf8de1f6a95dd.jpg"
                    },
                    {
                        "text": "vegetable oil",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "vegetable oil",
                        "weight": 12.337712463999999,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "ground black pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 2.7215542200000002,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "kosher salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "kosher salt",
                        "weight": 5.4431084400000005,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "unsalted butter",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "unsalted butter",
                        "weight": 12.337712463999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    }
                ],
                "calories": 2182.02061084084,
                "totalWeight": 938.9671713700684,
                "totalTime": 40.0,
                "cuisineType": [
                    "british"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2182.02061084084,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 154.7010888031224,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 63.16119893718097,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 8.3099210805688,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 73.51081422910148,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 8.76260263708984,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.7478365511684002,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 1.0592833335084002,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.6885532176600001,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.0248205744864,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 185.090453103402,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 579.9087731976001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2173.351096244291,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 188.43514531925646,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 95.6629404877007,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2271.1558031529257,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 17.608430983587628,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 28.987069094657667,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1712.7684178589602,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 121.41216249316,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.4390048393808001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.1954088432337606,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 45.04172415536949,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 5.360679820154121,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 28.04833779132,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 28.04833779132,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 16.3502994311888,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.0922504269600002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.0906853122048,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 18.926595230620002,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 584.2481174642978,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 109.10103054204201,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 238.00167508172675,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 315.80599468590486,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.5826121837228,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.754212870640001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 370.18090620680397,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 193.30292439920004,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 90.55629567684547,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 18.84351453192565,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 22.776890592309687,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 48.322463896870765,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 97.82461657548681,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 263.51880995143335,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 244.68120255128002,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 13.490240277017778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 36.58373661506668,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 168.8776033256739,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 281.5107759710593,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 412.3599861657016,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 7.01208444783,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 681.2624762995334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 7.281669513066668,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 33.93790208136534,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 15.772162692183336,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 154.7010888031224,
                        "hasRDI": true,
                        "daily": 238.00167508172675,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 63.16119893718097,
                                "hasRDI": true,
                                "daily": 315.80599468590486,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 8.3099210805688,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 73.51081422910148,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 8.76260263708984,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 1.7478365511684002,
                        "hasRDI": true,
                        "daily": 0.5826121837228,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 1.0592833335084002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.6885532176600001,
                                "hasRDI": true,
                                "daily": 2.754212870640001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.0248205744864,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 185.090453103402,
                        "hasRDI": true,
                        "daily": 370.18090620680397,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 579.9087731976001,
                        "hasRDI": true,
                        "daily": 193.30292439920004,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2173.351096244291,
                        "hasRDI": true,
                        "daily": 90.55629567684547,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 188.43514531925646,
                        "hasRDI": true,
                        "daily": 18.84351453192565,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 95.6629404877007,
                        "hasRDI": true,
                        "daily": 22.776890592309687,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2271.1558031529257,
                        "hasRDI": true,
                        "daily": 48.322463896870765,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 17.608430983587628,
                        "hasRDI": true,
                        "daily": 97.82461657548681,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 28.987069094657667,
                        "hasRDI": true,
                        "daily": 263.51880995143335,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1712.7684178589602,
                        "hasRDI": true,
                        "daily": 244.68120255128002,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 121.41216249316,
                        "hasRDI": true,
                        "daily": 13.490240277017778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.4390048393808001,
                        "hasRDI": true,
                        "daily": 36.58373661506668,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.1954088432337606,
                        "hasRDI": true,
                        "daily": 168.8776033256739,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 45.04172415536949,
                        "hasRDI": true,
                        "daily": 281.5107759710593,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 5.360679820154121,
                        "hasRDI": true,
                        "daily": 412.3599861657016,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 28.04833779132,
                        "hasRDI": true,
                        "daily": 7.01208444783,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 28.04833779132,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 16.3502994311888,
                        "hasRDI": true,
                        "daily": 681.2624762995334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.0922504269600002,
                        "hasRDI": true,
                        "daily": 7.281669513066668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 5.0906853122048,
                        "hasRDI": true,
                        "daily": 33.93790208136534,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 18.926595230620002,
                        "hasRDI": true,
                        "daily": 15.772162692183336,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 584.2481174642978,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/7e3aad53d00b9acccaef151afa67b7e6?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_90101bbc817bd554bba0e759b8faea96",
                "label": "Vietnamese Sugar Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0ce/0ceb02a442b8a784fdf2cb37c5a4bce2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e58a11eaf86db6fa41b830282553f1d79d8053a7c4fb5f64518146f20508d344",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0ce/0ceb02a442b8a784fdf2cb37c5a4bce2-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4fd15a42a162a8e4ec04df8a14fb340a5b30d5b6103632ac4a6e170436fa3b59",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0ce/0ceb02a442b8a784fdf2cb37c5a4bce2-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a683b7023cd202a7d15a892e293adff8fdb0646d99513de05b53cbac52a313eb",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0ce/0ceb02a442b8a784fdf2cb37c5a4bce2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e58a11eaf86db6fa41b830282553f1d79d8053a7c4fb5f64518146f20508d344",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0ce/0ceb02a442b8a784fdf2cb37c5a4bce2-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3f5e84be18e5ed44d976b5f4b8001893cb5ea03eb2bd200ceca26e53c923f56",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/34678-vietnamese-sugar-steak",
                "shareAs": "http://www.edamam.com/recipe/vietnamese-sugar-steak-90101bbc817bd554bba0e759b8faea96/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "4 tablespoons fish sauce",
                    "2 tablespoons brown sugar",
                    "3 tablespoons lime juice, divided",
                    "1 tablespoon minced garlic",
                    "1 pound skirt or flap steak",
                    "1 tablespoon butter (optional)"
                ],
                "ingredients": [
                    {
                        "text": "4 tablespoons fish sauce",
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "fish sauce",
                        "weight": 72.0,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "2 tablespoons brown sugar",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "brown sugar",
                        "weight": 18.12499999969356,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "3 tablespoons lime juice, divided",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "lime juice",
                        "weight": 46.199999999218896,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                    },
                    {
                        "text": "1 tablespoon minced garlic",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "garlic",
                        "weight": 8.499999999856291,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 pound skirt or flap steak",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "flap steak",
                        "weight": 453.59237,
                        "foodCategory": "meats",
                        "foodId": "food_agvdl6pajjrz8sbghz0cdaz6q4yf",
                        "image": "https://www.edamam.com/food-img/e1d/e1dc9aaf420f55f30dd24768e532594a.jpg"
                    },
                    {
                        "text": "1 tablespoon butter (optional)",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 14.2,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    }
                ],
                "calories": 1104.6091214984262,
                "totalWeight": 612.6173699987688,
                "totalTime": 0.0,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "sandwiches"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1104.6091214984262,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 69.56876488599873,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 30.14151690579981,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 3.5725837345,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 30.25195443699992,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 3.169467525199463,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 27.10827249958614,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 26.744972499592283,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.3632999999938577,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 21.07997499968805,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 17.58487499970269,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 95.51091942198723,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 325.3650405,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5956.561040499873,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 98.48029219937618,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 224.454723999874,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1475.1378697981022,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 8.59027778999468,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 27.377241988997618,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 681.8190127996586,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 119.07569479998436,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 16.87199999972083,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.2783039560995173,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.309527017499725,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 24.840714201197546,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.3296680513978028,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 55.810021099914515,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 55.810021099914515,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 11.528112302,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.66659237,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.2089870289981668,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.219585549992871,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 402.7507572342026,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 55.230456074921314,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 107.02886905538267,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 150.70758452899906,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 9.036090833195379,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.4531999999754308,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 191.02183884397445,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 108.4550135,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 248.19004335416142,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 9.848029219937619,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 53.44160095235095,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 31.385912123363877,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 47.72376549997044,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 248.8840180817965,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 97.40271611423694,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 13.230632755553817,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 18.74666666635648,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 23.191996341626442,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 100.73284749997885,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 155.25446375748467,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 179.20523472290787,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 13.952505274978627,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 480.33801258333335,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.443949133333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.059913526654446,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.849654624994059,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 69.56876488599873,
                        "hasRDI": true,
                        "daily": 107.02886905538267,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 30.14151690579981,
                                "hasRDI": true,
                                "daily": 150.70758452899906,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 3.5725837345,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 30.25195443699992,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 3.169467525199463,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 27.10827249958614,
                        "hasRDI": true,
                        "daily": 9.036090833195379,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 26.744972499592283,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.3632999999938577,
                                "hasRDI": true,
                                "daily": 1.4531999999754308,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 21.07997499968805,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 17.58487499970269,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 95.51091942198723,
                        "hasRDI": true,
                        "daily": 191.02183884397445,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 325.3650405,
                        "hasRDI": true,
                        "daily": 108.4550135,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5956.561040499873,
                        "hasRDI": true,
                        "daily": 248.19004335416142,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 98.48029219937618,
                        "hasRDI": true,
                        "daily": 9.848029219937619,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 224.454723999874,
                        "hasRDI": true,
                        "daily": 53.44160095235095,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1475.1378697981022,
                        "hasRDI": true,
                        "daily": 31.385912123363877,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 8.59027778999468,
                        "hasRDI": true,
                        "daily": 47.72376549997044,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 27.377241988997618,
                        "hasRDI": true,
                        "daily": 248.8840180817965,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 681.8190127996586,
                        "hasRDI": true,
                        "daily": 97.40271611423694,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 119.07569479998436,
                        "hasRDI": true,
                        "daily": 13.230632755553817,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 16.87199999972083,
                        "hasRDI": true,
                        "daily": 18.74666666635648,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.2783039560995173,
                        "hasRDI": true,
                        "daily": 23.191996341626442,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.309527017499725,
                        "hasRDI": true,
                        "daily": 100.73284749997885,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 24.840714201197546,
                        "hasRDI": true,
                        "daily": 155.25446375748467,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.3296680513978028,
                        "hasRDI": true,
                        "daily": 179.20523472290787,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 55.810021099914515,
                        "hasRDI": true,
                        "daily": 13.952505274978627,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 55.810021099914515,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 11.528112302,
                        "hasRDI": true,
                        "daily": 480.33801258333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.66659237,
                        "hasRDI": true,
                        "daily": 4.443949133333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.2089870289981668,
                        "hasRDI": true,
                        "daily": 8.059913526654446,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 8.219585549992871,
                        "hasRDI": true,
                        "daily": 6.849654624994059,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 402.7507572342026,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/90101bbc817bd554bba0e759b8faea96?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b1c3d81bc67ba4b029186f2721d21606",
                "label": "Panfried Flank Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/282/28272cdd5f3c3b2fe128ed91e54fcd01.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0485b3f1bbabbb02011c5a80f1339b3cb6a98806c25e9e6881871ac0b862c47a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/282/28272cdd5f3c3b2fe128ed91e54fcd01-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39a142c291e55a5c3f6b73f98566d600852c8b0055e035ac04c4f6214f3fc703",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/282/28272cdd5f3c3b2fe128ed91e54fcd01-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7261fc9f48f9cb5222443e322a39d8eb84066708da1198b9c4199b7a3d4ccf0e",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/282/28272cdd5f3c3b2fe128ed91e54fcd01.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0485b3f1bbabbb02011c5a80f1339b3cb6a98806c25e9e6881871ac0b862c47a",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/282/28272cdd5f3c3b2fe128ed91e54fcd01-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=111f0ba5dffe8fea6efa84652c10f0b9dceb5ebf0313da573b8bef2d8ca25699",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Saveur",
                "url": "http://www.saveur.com/article/Recipes/Panfried-Flank-Steak",
                "shareAs": "http://www.edamam.com/recipe/panfried-flank-steak-b1c3d81bc67ba4b029186f2721d21606/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "2 tbsp. butter",
                    "3 cloves garlic, peeled and crushed",
                    "1 1½-lb. piece flank steak, about ¾\" thick",
                    "Salt and freshly ground pepper",
                    "3 tbsp. olive oil",
                    "1 tbsp. finely chopped curly parsley"
                ],
                "ingredients": [
                    {
                        "text": "2 tbsp. butter",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3 cloves garlic, peeled and crushed",
                        "quantity": 3.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 9.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 1½-lb. piece flank steak, about ¾\" thick",
                        "quantity": 1.5,
                        "measure": "pound",
                        "food": "flank steak",
                        "weight": 680.388555,
                        "foodCategory": "meats",
                        "foodId": "food_abhe6ejbfw25i1a4u0iiwbi0aw6s",
                        "image": "https://www.edamam.com/food-img/f8d/f8dedaeb7292857a4d92019961fb91fb.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 4.5725313299999994,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 2.2862656649999997,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "3 tbsp. olive oil",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 40.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 tbsp. finely chopped curly parsley",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "parsley",
                        "weight": 3.8,
                        "foodCategory": "vegetables",
                        "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                        "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                    }
                ],
                "calories": 1704.80564256915,
                "totalWeight": 767.992342944599,
                "totalTime": 0.0,
                "cuisineType": [
                    "british"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1704.80564256915,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 120.089003470179,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 43.651380766706794,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.9309519999999999,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 58.54539766226435,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.4552675905867005,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 4.6950468927675,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 3.802221679522501,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.8928252132449999,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.153972100256,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 145.5426543735935,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 523.7242174,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1777.5383579600443,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 223.45627209305383,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 158.349171609946,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2340.3191039702183,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.401036822094179,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 26.124248029193097,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1339.5522109007,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 210.87129172954997,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 7.862,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.4061747577182,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.639744977697,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 46.703138949650956,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.00709368213515,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 88.93329176305001,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 88.93329176305001,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 8.076864949,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.106388555,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.775389394415999,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 101.429668108605,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 486.5901340494182,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 85.24028212845751,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 184.75231303104462,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 218.25690383353398,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.5650156309225,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.5713008529799994,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 291.085308747187,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 174.57473913333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 74.06409824833517,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 22.34562720930538,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 37.70218371665381,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 49.79402348872805,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 63.33909345607877,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 237.49316390175542,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 191.36460155724285,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 23.43014352550555,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8.735555555555557,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 33.84789647651667,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 49.21115213053846,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 291.8946184353185,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 308.2379755488577,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 22.233322940762502,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 336.5360395416667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 7.3759237,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 58.50259596277333,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 84.5247234238375,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 120.089003470179,
                        "hasRDI": true,
                        "daily": 184.75231303104462,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 43.651380766706794,
                                "hasRDI": true,
                                "daily": 218.25690383353398,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.9309519999999999,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 58.54539766226435,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 7.4552675905867005,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 4.6950468927675,
                        "hasRDI": true,
                        "daily": 1.5650156309225,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 3.802221679522501,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.8928252132449999,
                                "hasRDI": true,
                                "daily": 3.5713008529799994,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.153972100256,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 145.5426543735935,
                        "hasRDI": true,
                        "daily": 291.085308747187,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 523.7242174,
                        "hasRDI": true,
                        "daily": 174.57473913333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1777.5383579600443,
                        "hasRDI": true,
                        "daily": 74.06409824833517,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 223.45627209305383,
                        "hasRDI": true,
                        "daily": 22.34562720930538,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 158.349171609946,
                        "hasRDI": true,
                        "daily": 37.70218371665381,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2340.3191039702183,
                        "hasRDI": true,
                        "daily": 49.79402348872805,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.401036822094179,
                        "hasRDI": true,
                        "daily": 63.33909345607877,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 26.124248029193097,
                        "hasRDI": true,
                        "daily": 237.49316390175542,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1339.5522109007,
                        "hasRDI": true,
                        "daily": 191.36460155724285,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 210.87129172954997,
                        "hasRDI": true,
                        "daily": 23.43014352550555,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 7.862,
                        "hasRDI": true,
                        "daily": 8.735555555555557,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.4061747577182,
                        "hasRDI": true,
                        "daily": 33.84789647651667,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.639744977697,
                        "hasRDI": true,
                        "daily": 49.21115213053846,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 46.703138949650956,
                        "hasRDI": true,
                        "daily": 291.8946184353185,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.00709368213515,
                        "hasRDI": true,
                        "daily": 308.2379755488577,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 88.93329176305001,
                        "hasRDI": true,
                        "daily": 22.233322940762502,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 88.93329176305001,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 8.076864949,
                        "hasRDI": true,
                        "daily": 336.5360395416667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.106388555,
                        "hasRDI": true,
                        "daily": 7.3759237,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 8.775389394415999,
                        "hasRDI": true,
                        "daily": 58.50259596277333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 101.429668108605,
                        "hasRDI": true,
                        "daily": 84.5247234238375,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 486.5901340494182,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/b1c3d81bc67ba4b029186f2721d21606?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_415c05d3a30d75e4b122511236effc89",
                "label": "Sous-vide steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f35/f35a82bc580570f60c34c4d7e57c22f8?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a064b876341b9456e74cefd13ea48340b015f71d8e38d565fdf51db8c8aaefa3",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f35/f35a82bc580570f60c34c4d7e57c22f8-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=164b57e2bedc5bf1e52110214065d6a874fc855b4b4578c14e345af288bf9a43",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f35/f35a82bc580570f60c34c4d7e57c22f8-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33902a28ee9a0ddf5534e1268b63affa5e1c12bc0381cf890e9b7494dfbdd3cf",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f35/f35a82bc580570f60c34c4d7e57c22f8?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a064b876341b9456e74cefd13ea48340b015f71d8e38d565fdf51db8c8aaefa3",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f35/f35a82bc580570f60c34c4d7e57c22f8-l?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d5a09ba7b1895107ddaf828170d0514a339547312dfbe6207b77eb58a2b3f3e4",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "LA Times",
                "url": "https://www.latimes.com/recipe/sous-vide-steak",
                "shareAs": "http://www.edamam.com/recipe/sous-vide-steak-415c05d3a30d75e4b122511236effc89/steak",
                "yield": 1.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 (16-ounce) New York strip steak, at room temperature",
                    "Salt",
                    "Canola oil, as needed for brushing the grill and submerging the steak",
                    "1 garlic clove, crushed",
                    "2 springs sprigs thyme"
                ],
                "ingredients": [
                    {
                        "text": "1 (16-ounce) New York strip steak, at room temperature",
                        "quantity": 16.0,
                        "measure": "ounce",
                        "food": "New York strip steak",
                        "weight": 453.59237,
                        "foodCategory": "meats",
                        "foodId": "food_a1qm1qga3rhbanbowi34ja6x6xyl",
                        "image": "https://www.edamam.com/food-img/818/818522f7f285ce65fd11f956d119cb50.jpg"
                    },
                    {
                        "text": "Salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 2.7575542200000003,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Canola oil, as needed for brushing the grill and submerging the steak",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Canola oil",
                        "weight": 6.2504562319999994,
                        "foodCategory": "Oils",
                        "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                        "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                    },
                    {
                        "text": "1 garlic clove, crushed",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "2 springs sprigs thyme",
                        "quantity": 1.0,
                        "measure": "sprig",
                        "food": "thyme",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                        "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                    }
                ],
                "calories": 1030.2665583008802,
                "totalWeight": 468.0670955021532,
                "totalTime": 0.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1030.2665583008802,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 76.12372197500002,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 28.6859355917868,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0246893021164,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 34.20787384066032,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 4.27265550410944,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.7252999999999998,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 1.2422999999999997,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.483,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.03,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 79.2282412956,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 334.75116906000005,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1083.3081755459914,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 42.60781260483678,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 83.13653796270155,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1263.3420032016124,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.154393529891507,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 13.154784525270156,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 685.4370007800001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 7.14,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 5.739,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.37484981970000003,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.5889563862000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 16.200928753500005,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.6804225320000004,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1.44,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 25.933987980000005,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 11.389704410700002,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.0937296581072,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 10.631072288416002,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 254.73770202024036,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 51.51332791504401,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 117.11341842307696,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 143.429677958934,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.5751,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.932,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 158.4564825912,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 111.58372302000001,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 45.13784064774964,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 4.260781260483678,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 19.794413800643227,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 26.879617089396007,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 39.74663072161948,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 119.5889502297287,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 97.91957154,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.7933333333333333,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 6.376666666666666,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 31.237484975,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 45.30433740000001,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 101.25580470937503,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 129.2632716923077,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 0.36,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 474.57101711250004,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.291531054048,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.859226907013333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 76.12372197500002,
                        "hasRDI": true,
                        "daily": 117.11341842307696,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 28.6859355917868,
                                "hasRDI": true,
                                "daily": 143.429677958934,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0246893021164,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 34.20787384066032,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 4.27265550410944,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 1.7252999999999998,
                        "hasRDI": true,
                        "daily": 0.5751,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 1.2422999999999997,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.483,
                                "hasRDI": true,
                                "daily": 1.932,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.03,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 79.2282412956,
                        "hasRDI": true,
                        "daily": 158.4564825912,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 334.75116906000005,
                        "hasRDI": true,
                        "daily": 111.58372302000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1083.3081755459914,
                        "hasRDI": true,
                        "daily": 45.13784064774964,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 42.60781260483678,
                        "hasRDI": true,
                        "daily": 4.260781260483678,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 83.13653796270155,
                        "hasRDI": true,
                        "daily": 19.794413800643227,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1263.3420032016124,
                        "hasRDI": true,
                        "daily": 26.879617089396007,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.154393529891507,
                        "hasRDI": true,
                        "daily": 39.74663072161948,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 13.154784525270156,
                        "hasRDI": true,
                        "daily": 119.5889502297287,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 685.4370007800001,
                        "hasRDI": true,
                        "daily": 97.91957154,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 7.14,
                        "hasRDI": true,
                        "daily": 0.7933333333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 5.739,
                        "hasRDI": true,
                        "daily": 6.376666666666666,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.37484981970000003,
                        "hasRDI": true,
                        "daily": 31.237484975,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.5889563862000001,
                        "hasRDI": true,
                        "daily": 45.30433740000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 16.200928753500005,
                        "hasRDI": true,
                        "daily": 101.25580470937503,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.6804225320000004,
                        "hasRDI": true,
                        "daily": 129.2632716923077,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1.44,
                        "hasRDI": true,
                        "daily": 0.36,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 25.933987980000005,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 11.389704410700002,
                        "hasRDI": true,
                        "daily": 474.57101711250004,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.0937296581072,
                        "hasRDI": true,
                        "daily": 7.291531054048,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 10.631072288416002,
                        "hasRDI": true,
                        "daily": 8.859226907013333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 254.73770202024036,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/415c05d3a30d75e4b122511236effc89?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c7cb4785919818e7180e9064dd813ff9",
                "label": "Stir-fry Pepper Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1f9/1f994636a9fc09d525de4bdab1cc4e7b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d54b8ea935fb8947e7c2e4be330ba5e66c462ae60a8f9ff601805deb1941ef05",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1f9/1f994636a9fc09d525de4bdab1cc4e7b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e79cb391dffc5cc2ffb6d48e7c76fb962e0f9a3ab4de9689e77328df9a8c5d5b",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1f9/1f994636a9fc09d525de4bdab1cc4e7b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=383e827a28fec34d0ca8aeceda3925b25658333b4883b03d9755520e37fc2b84",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1f9/1f994636a9fc09d525de4bdab1cc4e7b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d54b8ea935fb8947e7c2e4be330ba5e66c462ae60a8f9ff601805deb1941ef05",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Red Cook",
                "url": "http://redcook.net/2008/03/05/stir-fry-1/",
                "shareAs": "http://www.edamam.com/recipe/stir-fry-pepper-steak-c7cb4785919818e7180e9064dd813ff9/steak",
                "yield": 6.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 lb. flank steak or sirloin steak",
                    "2 cups shredded italian green peppers (about 2 medium peppers)",
                    "1 tablespoon minced garlic",
                    "1 tablespoon thinly shredded ginger",
                    "1 tablespoon light soy sauce",
                    "2 tablespoons shaoxing wine",
                    "1 tablespoon cornstarch",
                    "1 tablespoon vegetable oil for marinate",
                    "3 tablespoons vegetable oil for stir-frying"
                ],
                "ingredients": [
                    {
                        "text": "1 lb. flank steak or sirloin steak",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "flank steak",
                        "weight": 453.59237,
                        "foodCategory": "meats",
                        "foodId": "food_abhe6ejbfw25i1a4u0iiwbi0aw6s",
                        "image": "https://www.edamam.com/food-img/f8d/f8dedaeb7292857a4d92019961fb91fb.jpg"
                    },
                    {
                        "text": "2 cups shredded italian green peppers (about 2 medium peppers)",
                        "quantity": 2.0,
                        "measure": "pepper",
                        "food": "green peppers",
                        "weight": 16.0,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_a1bb6oebsm1x27ap3gjd9aqdnsmv",
                        "image": "https://www.edamam.com/food-img/5c7/5c7d5ccf804ea606016003b8b2edfad2.jpg"
                    },
                    {
                        "text": "1 tablespoon minced garlic",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "garlic",
                        "weight": 8.499999999856291,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 tablespoon thinly shredded ginger",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "ginger",
                        "weight": 5.99999999989856,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "1 tablespoon light soy sauce",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "light soy sauce",
                        "weight": 14.2,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_af8xwhdbq4vg0tbqfqjysafu339b",
                        "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
                    },
                    {
                        "text": "2 tablespoons shaoxing wine",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "wine",
                        "weight": 29.49999999950124,
                        "foodCategory": "wines",
                        "foodId": "food_bw5p1agbubb4dubpm8r0yax8fjco",
                        "image": "https://www.edamam.com/food-img/aeb/aebdd2e72bc13fa8ca762a408b6e58b6.jpg"
                    },
                    {
                        "text": "1 tablespoon cornstarch",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "cornstarch",
                        "weight": 7.999999999864745,
                        "foodCategory": "grains",
                        "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
                        "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                    },
                    {
                        "text": "1 tablespoon vegetable oil for marinate",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 14.0,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "3 tablespoons vegetable oil for stir-frying",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 42.0,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    }
                ],
                "calories": 1326.8714104987757,
                "totalWeight": 591.7923699991208,
                "totalTime": 35.0,
                "cuisineType": [
                    "chinese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1326.8714104987757,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 93.78490747299846,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 19.295980299099654,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.42952,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 55.6670011059998,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 11.172175439499451,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 13.39807999979745,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 12.736179999803714,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.6618999999937359,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.4910499999928982,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 98.35665091398832,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 308.4428116,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 979.3158797999251,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 152.15493989968107,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 119.53832139986156,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1658.6288209985046,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.677631734994469,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 17.584999296997257,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 924.1902740996286,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1.28,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 10.391999999950091,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.28366672719966235,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.4652881329996928,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 31.43813995539741,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.771717432697794,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 64.44908439997955,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 64.44908439997955,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.3523899660000005,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.4535923700000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 13.785474820999621,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.047200809997458,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 376.25454020139273,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 66.34357052493878,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 144.28447303538223,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 96.47990149549827,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 4.4660266665991495,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.6475999999749438,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 196.71330182797664,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 102.81427053333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 40.80482832499688,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 15.215493989968106,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 28.461505095205133,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 35.2899749148618,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 42.65350963885816,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 159.86362997270234,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 132.02718201423266,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.14222222222222222,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 11.546666666611213,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 23.638893933305198,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 35.79139484613022,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 196.4883747212338,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 213.20903328444567,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 16.11227109999489,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 223.01624858333338,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.0239491333333337,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 91.9031654733308,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 5.039334008331214,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 93.78490747299846,
                        "hasRDI": true,
                        "daily": 144.28447303538223,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 19.295980299099654,
                                "hasRDI": true,
                                "daily": 96.47990149549827,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.42952,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 55.6670011059998,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 11.172175439499451,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 13.39807999979745,
                        "hasRDI": true,
                        "daily": 4.4660266665991495,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 12.736179999803714,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.6618999999937359,
                                "hasRDI": true,
                                "daily": 2.6475999999749438,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.4910499999928982,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 98.35665091398832,
                        "hasRDI": true,
                        "daily": 196.71330182797664,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 308.4428116,
                        "hasRDI": true,
                        "daily": 102.81427053333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 979.3158797999251,
                        "hasRDI": true,
                        "daily": 40.80482832499688,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 152.15493989968107,
                        "hasRDI": true,
                        "daily": 15.215493989968106,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 119.53832139986156,
                        "hasRDI": true,
                        "daily": 28.461505095205133,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1658.6288209985046,
                        "hasRDI": true,
                        "daily": 35.2899749148618,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.677631734994469,
                        "hasRDI": true,
                        "daily": 42.65350963885816,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 17.584999296997257,
                        "hasRDI": true,
                        "daily": 159.86362997270234,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 924.1902740996286,
                        "hasRDI": true,
                        "daily": 132.02718201423266,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1.28,
                        "hasRDI": true,
                        "daily": 0.14222222222222222,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 10.391999999950091,
                        "hasRDI": true,
                        "daily": 11.546666666611213,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.28366672719966235,
                        "hasRDI": true,
                        "daily": 23.638893933305198,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.4652881329996928,
                        "hasRDI": true,
                        "daily": 35.79139484613022,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 31.43813995539741,
                        "hasRDI": true,
                        "daily": 196.4883747212338,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.771717432697794,
                        "hasRDI": true,
                        "daily": 213.20903328444567,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 64.44908439997955,
                        "hasRDI": true,
                        "daily": 16.11227109999489,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 64.44908439997955,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 5.3523899660000005,
                        "hasRDI": true,
                        "daily": 223.01624858333338,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.4535923700000001,
                        "hasRDI": true,
                        "daily": 3.0239491333333337,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 13.785474820999621,
                        "hasRDI": true,
                        "daily": 91.9031654733308,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 6.047200809997458,
                        "hasRDI": true,
                        "daily": 5.039334008331214,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 376.25454020139273,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/c7cb4785919818e7180e9064dd813ff9?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1ce5be97a72e21ea9c027c5833509925",
                "label": "Grilled Flank Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fea/feac9229126ed5b8cda5b417cf6f3593.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=04613c1f3d7ebdb144d5130035ca54402b2798195e06638875a1a11a1e62df72",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fea/feac9229126ed5b8cda5b417cf6f3593-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5ab0dbd107900ff12e0a68957efb6f9ab990c50ab0f86c4c82c294f0b93cc37e",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fea/feac9229126ed5b8cda5b417cf6f3593-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39e30e1e7040eef522bb27dca35fcd6f28ac9d411798b5ad349fe302c1c674d3",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fea/feac9229126ed5b8cda5b417cf6f3593.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=04613c1f3d7ebdb144d5130035ca54402b2798195e06638875a1a11a1e62df72",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Real Simple",
                "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/grilled-flank-steak",
                "shareAs": "http://www.edamam.com/recipe/grilled-flank-steak-1ce5be97a72e21ea9c027c5833509925/steak",
                "yield": 6.0,
                "dietLabels": [
                    "High-Protein",
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 1/2 pounds flank steak",
                    "1/2 teaspoon kosher salt",
                    "1/4 teaspoon freshly ground black pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 pounds flank steak",
                        "quantity": 1.5,
                        "measure": "pound",
                        "food": "flank steak",
                        "weight": 680.388555,
                        "foodCategory": "meats",
                        "foodId": "food_abhe6ejbfw25i1a4u0iiwbi0aw6s",
                        "image": "https://www.edamam.com/food-img/f8d/f8dedaeb7292857a4d92019961fb91fb.jpg"
                    },
                    {
                        "text": "1/2 teaspoon kosher salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "kosher salt",
                        "weight": 2.4270833334564377,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/4 teaspoon freshly ground black pepper",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 0.575,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 1124.0843657500002,
                "totalWeight": 683.3906383334565,
                "totalTime": 25.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1124.0843657500002,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 56.4229562095,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 23.43378194865,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 23.001382409,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 2.2850401592500003,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.3677125,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.2222375,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.145475,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.00368,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 144.438193871,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 462.66421740000004,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1308.2137780810463,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 186.83465985002954,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 150.69300293333455,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2253.1181481666767,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.609864477500407,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 25.932073528833456,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1314.05841115,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.15525,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3816385908,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.6133846995000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 46.5587571831,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.88669189905,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 81.74437660000001,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 81.74437660000001,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 8.028584949,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.6803885550000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.2512622315,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 9.786326215,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 472.67438946966683,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 56.204218287500005,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 86.80454801461538,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 117.16890974325001,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.12257083333333334,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.5819,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 288.876387742,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 154.2214058,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 54.50890742004359,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 18.683465985002954,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 35.879286412698704,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 47.938684003546314,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 58.943691541668926,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 235.74612298939508,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 187.7226301642857,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.01725,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 31.8032159,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 47.18343842307692,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 290.992232394375,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 298.97629992692305,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 20.436094150000002,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 334.52437287500004,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.535923700000001,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.008414876666668,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.155271845833333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 56.4229562095,
                        "hasRDI": true,
                        "daily": 86.80454801461538,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 23.43378194865,
                                "hasRDI": true,
                                "daily": 117.16890974325001,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 23.001382409,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 2.2850401592500003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0.3677125,
                        "hasRDI": true,
                        "daily": 0.12257083333333334,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.2222375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.145475,
                                "hasRDI": true,
                                "daily": 0.5819,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.00368,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 144.438193871,
                        "hasRDI": true,
                        "daily": 288.876387742,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 462.66421740000004,
                        "hasRDI": true,
                        "daily": 154.2214058,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1308.2137780810463,
                        "hasRDI": true,
                        "daily": 54.50890742004359,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 186.83465985002954,
                        "hasRDI": true,
                        "daily": 18.683465985002954,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 150.69300293333455,
                        "hasRDI": true,
                        "daily": 35.879286412698704,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2253.1181481666767,
                        "hasRDI": true,
                        "daily": 47.938684003546314,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.609864477500407,
                        "hasRDI": true,
                        "daily": 58.943691541668926,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 25.932073528833456,
                        "hasRDI": true,
                        "daily": 235.74612298939508,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1314.05841115,
                        "hasRDI": true,
                        "daily": 187.7226301642857,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0.15525,
                        "hasRDI": true,
                        "daily": 0.01725,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3816385908,
                        "hasRDI": true,
                        "daily": 31.8032159,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.6133846995000001,
                        "hasRDI": true,
                        "daily": 47.18343842307692,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 46.5587571831,
                        "hasRDI": true,
                        "daily": 290.992232394375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.88669189905,
                        "hasRDI": true,
                        "daily": 298.97629992692305,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 81.74437660000001,
                        "hasRDI": true,
                        "daily": 20.436094150000002,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 81.74437660000001,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 8.028584949,
                        "hasRDI": true,
                        "daily": 334.52437287500004,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.6803885550000001,
                        "hasRDI": true,
                        "daily": 4.535923700000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.2512622315,
                        "hasRDI": true,
                        "daily": 15.008414876666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 9.786326215,
                        "hasRDI": true,
                        "daily": 8.155271845833333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 472.67438946966683,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/1ce5be97a72e21ea9c027c5833509925?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_936d14124d7f1bad0b06efe58c9aa9d1",
                "label": "Rolled Flank Steak Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a3f/a3f6080fb272d8e474872084caf7dea0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f49086b922631783e5adf580d5d9ccdfe75ef9e7a8b0dcebee053d70371a02ee",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a3f/a3f6080fb272d8e474872084caf7dea0-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a74786873c40a5a6ec0ce6d67a18e505f5f22204da1082747fd78e52ddd56997",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a3f/a3f6080fb272d8e474872084caf7dea0-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=eb398d704735b00c8081c384fb46fd503b1e06b704f26679652969b50de7e5a7",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a3f/a3f6080fb272d8e474872084caf7dea0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f49086b922631783e5adf580d5d9ccdfe75ef9e7a8b0dcebee053d70371a02ee",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a3f/a3f6080fb272d8e474872084caf7dea0-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5605910b4589c94f27fec4335aa06f51f42fa31e2d955a06618a3563838babe0",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food Republic",
                "url": "http://www.foodrepublic.com/2012/02/06/rolled-flank-steak-recipe",
                "shareAs": "http://www.edamam.com/recipe/rolled-flank-steak-recipe-936d14124d7f1bad0b06efe58c9aa9d1/steak",
                "yield": 6.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 2-pound flank steak",
                    "1/2 cup olive oil",
                    "1/4 cup soy sauce",
                    "2 teaspoons steak seasoning",
                    "2 tablespoons garlic, chopped",
                    "1/2 pound provolone cheese, thinly sliced",
                    "4 thick slices bacon",
                    "1/2 cup baby spinach",
                    "1/2 cup cremini mushrooms, sliced",
                    "1/2 red bell pepper, seeded and cut into strips",
                    "1/2 cup onion, chopped"
                ],
                "ingredients": [
                    {
                        "text": "1 2-pound flank steak",
                        "quantity": 2.0,
                        "measure": "pound",
                        "food": "flank steak",
                        "weight": 907.18474,
                        "foodCategory": "meats",
                        "foodId": "food_abhe6ejbfw25i1a4u0iiwbi0aw6s",
                        "image": "https://www.edamam.com/food-img/f8d/f8dedaeb7292857a4d92019961fb91fb.jpg"
                    },
                    {
                        "text": "1/2 cup olive oil",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "olive oil",
                        "weight": 108.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1/4 cup soy sauce",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "soy sauce",
                        "weight": 63.75,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "2 teaspoons steak seasoning",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "seasoning",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
                        "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
                    },
                    {
                        "text": "2 tablespoons garlic, chopped",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "garlic",
                        "weight": 16.999999999712582,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1/2 pound provolone cheese, thinly sliced",
                        "quantity": 0.5,
                        "measure": "pound",
                        "food": "provolone cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_agjkow4bqoxru5brleiuia6ggm9g",
                        "image": "https://www.edamam.com/food-img/f91/f9153e23de712eaa8958ce387c4fb4a4.jpg"
                    },
                    {
                        "text": "4 thick slices bacon",
                        "quantity": 4.0,
                        "measure": "slice",
                        "food": "bacon",
                        "weight": 116.0,
                        "foodCategory": "cured meats",
                        "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
                        "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
                    },
                    {
                        "text": "1/2 cup baby spinach",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "spinach",
                        "weight": 4.999999999999995,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "1/2 cup cremini mushrooms, sliced",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "cremini mushrooms",
                        "weight": 36.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bizlqkfby3d954bfyuxhsbhybslp",
                        "image": "https://www.edamam.com/food-img/17a/17a9ef54308a434004be9ba16c0eea03.jpg"
                    },
                    {
                        "text": "1/2 red bell pepper, seeded and cut into strips",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "red bell pepper",
                        "weight": 59.5,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                        "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
                    },
                    {
                        "text": "1/2 cup onion, chopped",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "onion",
                        "weight": 80.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    }
                ],
                "calories": 3859.191930349572,
                "totalWeight": 1622.2309249997127,
                "totalTime": 0.0,
                "cuisineType": [
                    "south american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "bread"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3859.1919303495724,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 290.6074343929985,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 100.52084557249977,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.15428,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 146.56456116904997,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 23.981304041649288,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 29.85836335890498,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 25.716863358911016,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.141499999993965,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 9.440258635997125,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 274.2284659509817,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 849.9349908500001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 6763.871840199951,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2082.08153839948,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 357.47857459992815,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4334.975877298848,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 19.296828631995112,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 44.81133036949667,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 3264.1006257995596,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 668.8239966,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 88.97049999991032,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.0412622295494254,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.0260845198496837,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 70.77645695939798,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.316541080446452,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 206.3867872999914,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 206.3867872999914,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 14.632004233,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.5411656650000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 20.62654086749977,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 133.63041768999508,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 993.8041331613317,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 192.95959651747862,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 447.0883606046131,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 502.6042278624988,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 9.952787786301661,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 16.56599999997586,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 548.4569319019633,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 283.3116636166667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 281.82799334166464,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 208.208153839948,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 85.11394633331624,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 92.2335293042308,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 107.20460351108396,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 407.3757306317879,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 466.30008939993706,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 74.31377739999999,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 98.85611111101146,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 86.77185246245212,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 155.85265537305258,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 442.35285599623734,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 485.88777541895786,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 51.59669682499785,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 609.6668430416667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.941104433333336,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 137.51027244999847,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 111.35868140832923,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 290.6074343929985,
                        "hasRDI": true,
                        "daily": 447.0883606046131,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 100.52084557249977,
                                "hasRDI": true,
                                "daily": 502.6042278624988,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.15428,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 146.56456116904997,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 23.981304041649288,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 29.85836335890498,
                        "hasRDI": true,
                        "daily": 9.952787786301661,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 25.716863358911016,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 4.141499999993965,
                                "hasRDI": true,
                                "daily": 16.56599999997586,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 9.440258635997125,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 274.2284659509817,
                        "hasRDI": true,
                        "daily": 548.4569319019633,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 849.9349908500001,
                        "hasRDI": true,
                        "daily": 283.3116636166667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 6763.871840199951,
                        "hasRDI": true,
                        "daily": 281.82799334166464,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 2082.08153839948,
                        "hasRDI": true,
                        "daily": 208.208153839948,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 357.47857459992815,
                        "hasRDI": true,
                        "daily": 85.11394633331624,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4334.975877298848,
                        "hasRDI": true,
                        "daily": 92.2335293042308,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 19.296828631995112,
                        "hasRDI": true,
                        "daily": 107.20460351108396,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 44.81133036949667,
                        "hasRDI": true,
                        "daily": 407.3757306317879,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 3264.1006257995596,
                        "hasRDI": true,
                        "daily": 466.30008939993706,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 668.8239966,
                        "hasRDI": true,
                        "daily": 74.31377739999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 88.97049999991032,
                        "hasRDI": true,
                        "daily": 98.85611111101146,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.0412622295494254,
                        "hasRDI": true,
                        "daily": 86.77185246245212,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.0260845198496837,
                        "hasRDI": true,
                        "daily": 155.85265537305258,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 70.77645695939798,
                        "hasRDI": true,
                        "daily": 442.35285599623734,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.316541080446452,
                        "hasRDI": true,
                        "daily": 485.88777541895786,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 206.3867872999914,
                        "hasRDI": true,
                        "daily": 51.59669682499785,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 206.3867872999914,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 14.632004233,
                        "hasRDI": true,
                        "daily": 609.6668430416667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.5411656650000003,
                        "hasRDI": true,
                        "daily": 16.941104433333336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 20.62654086749977,
                        "hasRDI": true,
                        "daily": 137.51027244999847,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 133.63041768999508,
                        "hasRDI": true,
                        "daily": 111.35868140832923,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 993.8041331613317,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/936d14124d7f1bad0b06efe58c9aa9d1?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f2460b0d944cbc5d96eb51c47e1b6e6b",
                "label": "Southwestern Skirt Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/9b5/9b5b1832b2b045727e7d94478eb25d43.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad658518c4c75ba8378acb3a0ca4b1dfd30d5bfab0a18c5d18a9f46ab1037f8",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9b5/9b5b1832b2b045727e7d94478eb25d43-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=87cc18991ebef696f8173d2804a7b976bb864a11d908b28465d45088011e0340",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9b5/9b5b1832b2b045727e7d94478eb25d43-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9ffbfc2cec17a0fa4c8fcf2fb18876d0a89ac8549d2e4ddcaf35208c8cb43c6a",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9b5/9b5b1832b2b045727e7d94478eb25d43.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad658518c4c75ba8378acb3a0ca4b1dfd30d5bfab0a18c5d18a9f46ab1037f8",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9b5/9b5b1832b2b045727e7d94478eb25d43-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=25b45d6689b1af7fbfa0d95f20197c0607175e07872eb45c4c6cd99685155d4d",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "EatingWell",
                "url": "http://www.eatingwell.com/recipe/264545/southwestern-skirt-steak/",
                "shareAs": "http://www.edamam.com/recipe/southwestern-skirt-steak-f2460b0d944cbc5d96eb51c47e1b6e6b/steak",
                "yield": 2.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "⅓ cup orange juice",
                    "2 tablespoons snipped fresh cilantro",
                    "2 tablespoons lime juice",
                    "1 teaspoon ground cumin",
                    "¼ teaspoon salt",
                    "¼ teaspoon ground black pepper",
                    "1 clove garlic, minced",
                    "8 ounces beef skirt steak or flank steak"
                ],
                "ingredients": [
                    {
                        "text": "⅓ cup orange juice",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "orange juice",
                        "weight": 82.66666666666666,
                        "foodCategory": "100% juice",
                        "foodId": "food_bn7zicravp7kdrb8h9knhadt6kei",
                        "image": "https://www.edamam.com/food-img/011/011c0c3b0f3865bde575f57c556439e4.jpg"
                    },
                    {
                        "text": "2 tablespoons snipped fresh cilantro",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "cilantro",
                        "weight": 1.999999999966186,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    },
                    {
                        "text": "2 tablespoons lime juice",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "lime juice",
                        "weight": 30.799999999479265,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                    },
                    {
                        "text": "1 teaspoon ground cumin",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "cumin",
                        "weight": 2.1,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
                        "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
                    },
                    {
                        "text": "¼ teaspoon salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "¼ teaspoon ground black pepper",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 0.575,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 clove garlic, minced",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "8 ounces beef skirt steak or flank steak",
                        "quantity": 8.0,
                        "measure": "ounce",
                        "food": "beef skirt steak",
                        "weight": 226.796185,
                        "foodCategory": "meats",
                        "foodId": "food_agvdl6pajjrz8sbghz0cdaz6q4yf",
                        "image": "https://www.edamam.com/food-img/e1d/e1dc9aaf420f55f30dd24768e532594a.jpg"
                    }
                ],
                "calories": 501.4008107498621,
                "totalWeight": 349.4378516661121,
                "totalTime": 85.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 501.4008107498621,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 29.683260776332794,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 11.482412952899955,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.5535538672500002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 13.967593968499866,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 1.4747234292665334,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 13.552645833288247,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 12.779137499957944,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.7735083333303037,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 7.562849999990904,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 46.87049387766376,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 147.41752025000002,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 735.3031869166407,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 56.241354433237774,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 66.8708203332829,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 845.1913932325479,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.589330978332266,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 13.759648077832749,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 361.88933973324424,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 26.1937640665423,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 52.21103333316798,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.22345097804984715,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.6675515087498672,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 12.03258826726555,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.0526888173664184,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 36.32163554992696,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 36.32163554992696,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.579186151000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.22679618500000004,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.6146901811646758,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 10.975084441558721,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 255.7363527836627,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 25.070040537493107,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 45.666555040511994,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 57.41206476449977,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 4.517548611096083,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.0940333333212147,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 93.74098775532751,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 49.13917341666667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 30.63763278819336,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 5.624135443323778,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 15.921623888876878,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 17.98279560069251,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 31.05183876851259,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 125.08770979847954,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 51.69847710474918,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2.9104182296158108,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 58.012259259075535,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 18.620914837487263,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 51.350116057682094,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 75.20367667040969,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 80.97606287433987,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 9.08040888748174,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 232.46608962500005,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.5119745666666669,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.097934541097839,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 9.145903701298932,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 29.683260776332794,
                        "hasRDI": true,
                        "daily": 45.666555040511994,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 11.482412952899955,
                                "hasRDI": true,
                                "daily": 57.41206476449977,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.5535538672500002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 13.967593968499866,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 1.4747234292665334,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 13.552645833288247,
                        "hasRDI": true,
                        "daily": 4.517548611096083,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 12.779137499957944,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.7735083333303037,
                                "hasRDI": true,
                                "daily": 3.0940333333212147,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 7.562849999990904,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 46.87049387766376,
                        "hasRDI": true,
                        "daily": 93.74098775532751,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 147.41752025000002,
                        "hasRDI": true,
                        "daily": 49.13917341666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 735.3031869166407,
                        "hasRDI": true,
                        "daily": 30.63763278819336,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 56.241354433237774,
                        "hasRDI": true,
                        "daily": 5.624135443323778,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 66.8708203332829,
                        "hasRDI": true,
                        "daily": 15.921623888876878,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 845.1913932325479,
                        "hasRDI": true,
                        "daily": 17.98279560069251,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.589330978332266,
                        "hasRDI": true,
                        "daily": 31.05183876851259,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 13.759648077832749,
                        "hasRDI": true,
                        "daily": 125.08770979847954,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 361.88933973324424,
                        "hasRDI": true,
                        "daily": 51.69847710474918,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 26.1937640665423,
                        "hasRDI": true,
                        "daily": 2.9104182296158108,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 52.21103333316798,
                        "hasRDI": true,
                        "daily": 58.012259259075535,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.22345097804984715,
                        "hasRDI": true,
                        "daily": 18.620914837487263,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.6675515087498672,
                        "hasRDI": true,
                        "daily": 51.350116057682094,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 12.03258826726555,
                        "hasRDI": true,
                        "daily": 75.20367667040969,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.0526888173664184,
                        "hasRDI": true,
                        "daily": 80.97606287433987,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 36.32163554992696,
                        "hasRDI": true,
                        "daily": 9.08040888748174,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 36.32163554992696,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 5.579186151000001,
                        "hasRDI": true,
                        "daily": 232.46608962500005,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.22679618500000004,
                        "hasRDI": true,
                        "daily": 1.5119745666666669,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.6146901811646758,
                        "hasRDI": true,
                        "daily": 4.097934541097839,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 10.975084441558721,
                        "hasRDI": true,
                        "daily": 9.145903701298932,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 255.7363527836627,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/f2460b0d944cbc5d96eb51c47e1b6e6b?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c8cf06847797fd89ca01e491ba3f0f5f",
                "label": "Porterhouse Steak recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/892/8922fda0c3c49331e21481814b1c0fa1?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ed05ed16606ac377ca61385bb0d0fa665f93223ef4cb32197f9c6746f5297cb",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/892/8922fda0c3c49331e21481814b1c0fa1-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3e43d016189b6807101e24754d71918c44aa3e36591aefebabe1f551b61f1a5d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/892/8922fda0c3c49331e21481814b1c0fa1-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c248f95bf11e91e47f70ee7413d25840a616545a42b2aba73ff05e2aaff56107",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/892/8922fda0c3c49331e21481814b1c0fa1?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ed05ed16606ac377ca61385bb0d0fa665f93223ef4cb32197f9c6746f5297cb",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food & Wine",
                "url": "http://www.foodandwine.com/recipes/porterhouse-steak",
                "shareAs": "http://www.edamam.com/recipe/porterhouse-steak-recipes-c8cf06847797fd89ca01e491ba3f0f5f/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "FODMAP-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "One 36-ounce porterhouse steak, cut 2 inches thick",
                    "kosher salt",
                    "freshly ground black pepper",
                    "1 tablespoon unsalted butter"
                ],
                "ingredients": [
                    {
                        "text": "One 36-ounce porterhouse steak, cut 2 inches thick",
                        "quantity": 36.0,
                        "measure": "ounce",
                        "food": "porterhouse steak",
                        "weight": 1020.5828325,
                        "foodCategory": "meats",
                        "foodId": "food_bwbjyozb6nminjbvtqrwnawt5rnc",
                        "image": "https://www.edamam.com/food-img/a74/a74f4d1a191fdf11e28bf8de1f6a95dd.jpg"
                    },
                    {
                        "text": "kosher salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "kosher salt",
                        "weight": 6.208696995,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "freshly ground black pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 3.1043484975,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 tablespoon unsalted butter",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 14.2,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    }
                ],
                "calories": 1822.7562573632251,
                "totalWeight": 1043.0545313402256,
                "totalTime": 45.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1822.7562573632251,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 126.19557403446349,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 55.83219680813795,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 7.231634004625249,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 56.72854580626552,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.877585499267299,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.9937508641512505,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 1.2083506942837503,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.7854001698675002,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.028387830384,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 160.44205362558023,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 509.89775642524995,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2413.585881666066,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 167.7116963209291,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 84.22898753665226,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1978.266180880693,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.331036212815745,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 25.123465212160472,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1485.70857895305,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 129.400125335325,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3812701112693,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.9043113895657497,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 39.02740472997667,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.645967462175225,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 24.529202675324996,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 24.529202675324996,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 14.169418058449999,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.998848781025,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.1691774207314998,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 17.8635502057825,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 506.830854916704,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 91.13781286816126,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 194.1470369760977,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 279.16098404068975,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.6645836213837502,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.1416006794700007,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 320.88410725116046,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 169.96591880841666,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 100.56607840275275,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 16.771169632092906,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 20.05452084206006,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 42.09076980597219,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 85.17242340453191,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 228.39513829236793,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 212.24408270757857,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 14.377791703924999,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 31.772509272441667,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 146.48549150505767,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 243.92127956235421,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 357.38211247501727,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 6.132300668831249,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 590.3924191020833,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.6589918735,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 14.461182804876666,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 14.886291838152083,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 126.19557403446349,
                        "hasRDI": true,
                        "daily": 194.1470369760977,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 55.83219680813795,
                                "hasRDI": true,
                                "daily": 279.16098404068975,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 7.231634004625249,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 56.72854580626552,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.877585499267299,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 1.9937508641512505,
                        "hasRDI": true,
                        "daily": 0.6645836213837502,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 1.2083506942837503,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.7854001698675002,
                                "hasRDI": true,
                                "daily": 3.1416006794700007,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.028387830384,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 160.44205362558023,
                        "hasRDI": true,
                        "daily": 320.88410725116046,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 509.89775642524995,
                        "hasRDI": true,
                        "daily": 169.96591880841666,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2413.585881666066,
                        "hasRDI": true,
                        "daily": 100.56607840275275,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 167.7116963209291,
                        "hasRDI": true,
                        "daily": 16.771169632092906,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 84.22898753665226,
                        "hasRDI": true,
                        "daily": 20.05452084206006,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1978.266180880693,
                        "hasRDI": true,
                        "daily": 42.09076980597219,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.331036212815745,
                        "hasRDI": true,
                        "daily": 85.17242340453191,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 25.123465212160472,
                        "hasRDI": true,
                        "daily": 228.39513829236793,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1485.70857895305,
                        "hasRDI": true,
                        "daily": 212.24408270757857,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 129.400125335325,
                        "hasRDI": true,
                        "daily": 14.377791703924999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3812701112693,
                        "hasRDI": true,
                        "daily": 31.772509272441667,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.9043113895657497,
                        "hasRDI": true,
                        "daily": 146.48549150505767,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 39.02740472997667,
                        "hasRDI": true,
                        "daily": 243.92127956235421,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.645967462175225,
                        "hasRDI": true,
                        "daily": 357.38211247501727,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 24.529202675324996,
                        "hasRDI": true,
                        "daily": 6.132300668831249,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 24.529202675324996,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 14.169418058449999,
                        "hasRDI": true,
                        "daily": 590.3924191020833,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.998848781025,
                        "hasRDI": true,
                        "daily": 6.6589918735,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.1691774207314998,
                        "hasRDI": true,
                        "daily": 14.461182804876666,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 17.8635502057825,
                        "hasRDI": true,
                        "daily": 14.886291838152083,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 506.830854916704,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/c8cf06847797fd89ca01e491ba3f0f5f?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bb79ef2c8850064ce6d0f5b9b4d9f1ef",
                "label": "Steak Verde",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/11f/11f61a044afa4ac4f8697c5630305e34.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1be9469eec313931df4c420de53e99cbcc980def965eecc5cfd0b1beaa14201d",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/11f/11f61a044afa4ac4f8697c5630305e34-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9bdf5a64a060517f0ee5a4695be02b3016b7929e78a9427dffe7359667b65b7f",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/11f/11f61a044afa4ac4f8697c5630305e34-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e51a6c798b6d7494dcaa71de392a77ff3e7641d3b7c0117597aee3cf11e5300",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/11f/11f61a044afa4ac4f8697c5630305e34.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1be9469eec313931df4c420de53e99cbcc980def965eecc5cfd0b1beaa14201d",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Delish",
                "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a32582/steak-verde-121217/",
                "shareAs": "http://www.edamam.com/recipe/steak-verde-bb79ef2c8850064ce6d0f5b9b4d9f1ef/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 lb. flank steak (3/4 to 1 in. thick)",
                    "1 c. salsa verde (green salsa)",
                    "1 c. Cilantro leaves"
                ],
                "ingredients": [
                    {
                        "text": "1 lb. flank steak (3/4 to 1 in. thick)",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "flank steak",
                        "weight": 453.59237,
                        "foodCategory": "meats",
                        "foodId": "food_abhe6ejbfw25i1a4u0iiwbi0aw6s",
                        "image": "https://www.edamam.com/food-img/f8d/f8dedaeb7292857a4d92019961fb91fb.jpg"
                    },
                    {
                        "text": "1 c. salsa verde (green salsa)",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "salsa verde",
                        "weight": 240.00000000405768,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_ax6tfr7a1hlbwpbkyaytlbkxaub2",
                        "image": "https://www.edamam.com/food-img/205/205d9e349c3b7e60d4886c5ab4e27a92.jpg"
                    },
                    {
                        "text": "1 c. Cilantro leaves",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "Cilantro leaves",
                        "weight": 16.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    }
                ],
                "calories": 843.307410501542,
                "totalWeight": 709.5923700040577,
                "totalTime": 20.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 843.307410501542,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 39.82200747303611,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 15.619425299100003,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 15.375422106000002,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 1.5259344395000003,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 15.851200000258068,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 10.843200000180973,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 5.008000000077095,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 8.539200000142019,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 99.30510091404585,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 308.4428116,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1692.299879824346,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 154.7899399003652,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 149.55032140077097,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2201.8148210105096,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 8.873881735026377,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 17.961869297010146,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 981.5132741016637,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 80.32000000044634,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 33.840000000499096,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.37513172720186655,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.5205531330014608,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 35.089029955465534,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.8130524327033677,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 83.55108440032463,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 83.55108440032463,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.3523899660000005,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.4535923700000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.9288548210174485,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 88.13670081055184,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 544.6668602056325,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 42.1653705250771,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 61.26462688159402,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 78.09712649550002,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 5.283733333419356,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 20.03200000030838,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 198.6102018280917,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 102.81427053333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 70.51249499268108,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 15.478993990036521,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 35.60721938113595,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 46.84712385128744,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 49.299342972368756,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 163.28972088191043,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 140.21618201452338,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 8.924444444494037,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 37.60000000055455,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 31.260977266822213,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 40.042548692420056,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 219.3064372216596,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 216.3886486694898,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 20.88777110008116,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 223.01624858333338,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.0239491333333337,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 19.52569880678299,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 73.44725067545987,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 39.82200747303611,
                        "hasRDI": true,
                        "daily": 61.26462688159402,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 15.619425299100003,
                                "hasRDI": true,
                                "daily": 78.09712649550002,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 15.375422106000002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 1.5259344395000003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 15.851200000258068,
                        "hasRDI": true,
                        "daily": 5.283733333419356,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 10.843200000180973,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 5.008000000077095,
                                "hasRDI": true,
                                "daily": 20.03200000030838,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 8.539200000142019,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 99.30510091404585,
                        "hasRDI": true,
                        "daily": 198.6102018280917,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 308.4428116,
                        "hasRDI": true,
                        "daily": 102.81427053333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1692.299879824346,
                        "hasRDI": true,
                        "daily": 70.51249499268108,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 154.7899399003652,
                        "hasRDI": true,
                        "daily": 15.478993990036521,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 149.55032140077097,
                        "hasRDI": true,
                        "daily": 35.60721938113595,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2201.8148210105096,
                        "hasRDI": true,
                        "daily": 46.84712385128744,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 8.873881735026377,
                        "hasRDI": true,
                        "daily": 49.299342972368756,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 17.961869297010146,
                        "hasRDI": true,
                        "daily": 163.28972088191043,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 981.5132741016637,
                        "hasRDI": true,
                        "daily": 140.21618201452338,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 80.32000000044634,
                        "hasRDI": true,
                        "daily": 8.924444444494037,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 33.840000000499096,
                        "hasRDI": true,
                        "daily": 37.60000000055455,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.37513172720186655,
                        "hasRDI": true,
                        "daily": 31.260977266822213,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.5205531330014608,
                        "hasRDI": true,
                        "daily": 40.042548692420056,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 35.089029955465534,
                        "hasRDI": true,
                        "daily": 219.3064372216596,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.8130524327033677,
                        "hasRDI": true,
                        "daily": 216.3886486694898,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 83.55108440032463,
                        "hasRDI": true,
                        "daily": 20.88777110008116,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 83.55108440032463,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 5.3523899660000005,
                        "hasRDI": true,
                        "daily": 223.01624858333338,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.4535923700000001,
                        "hasRDI": true,
                        "daily": 3.0239491333333337,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.9288548210174485,
                        "hasRDI": true,
                        "daily": 19.52569880678299,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 88.13670081055184,
                        "hasRDI": true,
                        "daily": 73.44725067545987,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 544.6668602056325,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/bb79ef2c8850064ce6d0f5b9b4d9f1ef?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a868b73e0f949f14d68967895e886ffc",
                "label": "Steak With Teriyaki Sauce",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/72a/72a13b64f56ca6e8465f561bf7a0d653.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=624c923957a2fcee109a9a072252a75172bd5f164d0e8fd34b35704423ac8eda",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72a/72a13b64f56ca6e8465f561bf7a0d653-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a517cf1efcbcd68def8ed080b531d397eb3c45fcd6eee5d22b814552b64b2bed",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72a/72a13b64f56ca6e8465f561bf7a0d653-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f19390c413650a5c7a6d25520155fab8450fb9393919f244dd3252c3866c91c0",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72a/72a13b64f56ca6e8465f561bf7a0d653.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=624c923957a2fcee109a9a072252a75172bd5f164d0e8fd34b35704423ac8eda",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72a/72a13b64f56ca6e8465f561bf7a0d653-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=764fc01e62f2323bb9f4f086eca83d924248cca987446fcf9919bad535a6389d",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Steamy Kitchen",
                "url": "http://steamykitchen.com/17758-steak-teriyaki-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/steak-with-teriyaki-sauce-a868b73e0f949f14d68967895e886ffc/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 pounds flank steak (or use steak of your choice)",
                    "salt and freshly ground pepper",
                    "8 ounces button mushrooms, sliced",
                    "1 red bell pepper, julienned",
                    "1 yellow bell pepper, julienned",
                    "1 1/2 tablespoons cooking oil, separated",
                    "1/4 cup soy sauce",
                    "1/4 cup mirin (Japanese sweet rice wine)",
                    "2 tablespoons sugar (or more if you like a sweet teriyaki)"
                ],
                "ingredients": [
                    {
                        "text": "2 pounds flank steak (or use steak of your choice)",
                        "quantity": 2.0,
                        "measure": "pound",
                        "food": "flank steak",
                        "weight": 907.18474,
                        "foodCategory": "meats",
                        "foodId": "food_abhe6ejbfw25i1a4u0iiwbi0aw6s",
                        "image": "https://www.edamam.com/food-img/f8d/f8dedaeb7292857a4d92019961fb91fb.jpg"
                    },
                    {
                        "text": "salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "salt",
                        "weight": 9.641585549997465,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 4.820792774998733,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "8 ounces button mushrooms, sliced",
                        "quantity": 8.0,
                        "measure": "ounce",
                        "food": "button mushrooms",
                        "weight": 226.796185,
                        "foodCategory": "vegetables",
                        "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                        "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
                    },
                    {
                        "text": "1 red bell pepper, julienned",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "red bell pepper",
                        "weight": 119.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                        "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
                    },
                    {
                        "text": "1 yellow bell pepper, julienned",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "yellow bell pepper",
                        "weight": 186.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_azxdee4b77a6m1bgwceioa3g8bgc",
                        "image": "https://www.edamam.com/food-img/e1a/e1a4da15c9ebffb004cf36c5c51de9df.jpeg"
                    },
                    {
                        "text": "1 1/2 tablespoons cooking oil, separated",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "cooking oil",
                        "weight": 21.0,
                        "foodCategory": "Oils",
                        "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                        "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                    },
                    {
                        "text": "1/4 cup soy sauce",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "soy sauce",
                        "weight": 63.75,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "1/4 cup mirin (Japanese sweet rice wine)",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "mirin",
                        "weight": 58.2,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                    },
                    {
                        "text": "2 tablespoons sugar (or more if you like a sweet teriyaki)",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 24.9999999995774,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    }
                ],
                "calories": 2040.1256715636114,
                "totalWeight": 1611.751717774576,
                "totalTime": 0.0,
                "cuisineType": [
                    "japanese"
                ],
                "mealType": [
                    "snack"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2040.1256715636114,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 98.24485481946498,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 33.097851626127984,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.08295,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 44.04609987060724,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 9.610836786894488,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 60.45522761018917,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 52.28460518811449,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 8.17062242207468,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 34.72441753633824,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 24.949999999578246,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 208.5318343138224,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 616.8856232,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4013.8652274049964,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 326.08737734324023,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 315.50285509524787,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4716.7623462797255,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 18.025818373452168,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 36.982911190022456,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2138.4251198844986,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 206.73161404924963,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 498.035719885,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8343123204469988,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.9944518566949176,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 74.52557996516823,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.183041404775246,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 260.2620550217498,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 260.2620550217498,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 10.795498406000002,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.3607771100000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.613325505359988,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 40.48903939267292,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1212.2832892162646,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 102.00628357818056,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 151.1459304914846,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 165.48925813063994,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 20.151742536729724,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 32.68248968829872,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 417.0636686276448,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 205.62854106666668,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 167.2443844752082,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 32.60873773432402,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 75.11972740363045,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 100.35664566552607,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 100.1434354080676,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 336.2082835456587,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 305.48930284064267,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 22.97017933880551,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 553.3730220944444,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 69.52602670391657,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 153.41937359191672,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 465.7848747823015,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 475.6185695980959,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 65.06551375543745,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 449.8124335833334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 9.071847400000001,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 57.42217003573326,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 33.74086616056077,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 98.24485481946498,
                        "hasRDI": true,
                        "daily": 151.1459304914846,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 33.097851626127984,
                                "hasRDI": true,
                                "daily": 165.48925813063994,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.08295,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 44.04609987060724,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 9.610836786894488,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 60.45522761018917,
                        "hasRDI": true,
                        "daily": 20.151742536729724,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 52.28460518811449,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 8.17062242207468,
                                "hasRDI": true,
                                "daily": 32.68248968829872,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 34.72441753633824,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 24.949999999578246,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 208.5318343138224,
                        "hasRDI": true,
                        "daily": 417.0636686276448,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 616.8856232,
                        "hasRDI": true,
                        "daily": 205.62854106666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4013.8652274049964,
                        "hasRDI": true,
                        "daily": 167.2443844752082,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 326.08737734324023,
                        "hasRDI": true,
                        "daily": 32.60873773432402,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 315.50285509524787,
                        "hasRDI": true,
                        "daily": 75.11972740363045,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4716.7623462797255,
                        "hasRDI": true,
                        "daily": 100.35664566552607,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 18.025818373452168,
                        "hasRDI": true,
                        "daily": 100.1434354080676,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 36.982911190022456,
                        "hasRDI": true,
                        "daily": 336.2082835456587,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2138.4251198844986,
                        "hasRDI": true,
                        "daily": 305.48930284064267,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 206.73161404924963,
                        "hasRDI": true,
                        "daily": 22.97017933880551,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 498.035719885,
                        "hasRDI": true,
                        "daily": 553.3730220944444,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8343123204469988,
                        "hasRDI": true,
                        "daily": 69.52602670391657,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.9944518566949176,
                        "hasRDI": true,
                        "daily": 153.41937359191672,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 74.52557996516823,
                        "hasRDI": true,
                        "daily": 465.7848747823015,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.183041404775246,
                        "hasRDI": true,
                        "daily": 475.6185695980959,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 260.2620550217498,
                        "hasRDI": true,
                        "daily": 65.06551375543745,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 260.2620550217498,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 10.795498406000002,
                        "hasRDI": true,
                        "daily": 449.8124335833334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.3607771100000003,
                        "hasRDI": true,
                        "daily": 9.071847400000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 8.613325505359988,
                        "hasRDI": true,
                        "daily": 57.42217003573326,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 40.48903939267292,
                        "hasRDI": true,
                        "daily": 33.74086616056077,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1212.2832892162646,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/a868b73e0f949f14d68967895e886ffc?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_52111a43d982b63e9fa42cc44d88bb30",
                "label": "Steak and Eggs",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/55d/55d6afbb15876da66d92f04535a0aeca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f90edfdd6818d68ffeb72dde15646d6804b607f238fa71c34bd45d19b37e2318",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/55d/55d6afbb15876da66d92f04535a0aeca-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b0aadcc85da86cf6860d1af7222af62e8b4f7b4b5855a0b03891d4eb39621cb",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/55d/55d6afbb15876da66d92f04535a0aeca-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f732135ff612a9c6d8a49f0fc1d4ff03a04551dd42941add6223c49829b72feb",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/55d/55d6afbb15876da66d92f04535a0aeca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f90edfdd6818d68ffeb72dde15646d6804b607f238fa71c34bd45d19b37e2318",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "The Daily Meal",
                "url": "http://www.thedailymeal.com/steak-and-eggs-recipe",
                "shareAs": "http://www.edamam.com/recipe/steak-and-eggs-52111a43d982b63e9fa42cc44d88bb30/steak",
                "yield": 2.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "One 3/4-pound boneless sirloin steak",
                    "Salt and pepper, to taste",
                    "1 egg, or more as desired, preferably heirloom or organic"
                ],
                "ingredients": [
                    {
                        "text": "One 3/4-pound boneless sirloin steak",
                        "quantity": 0.75,
                        "measure": "pound",
                        "food": "sirloin steak",
                        "weight": 340.1942775,
                        "foodCategory": "meats",
                        "foodId": "food_aifm62daw1i6txalya881bcetyzn",
                        "image": "https://www.edamam.com/food-img/4f1/4f10105d5c8178f25590ca6dfcd37fca.jpg"
                    },
                    {
                        "text": "Salt and pepper, to taste",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 2.299165665,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and pepper, to taste",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 1.1495828325,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 egg, or more as desired, preferably heirloom or organic",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 43.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    }
                ],
                "calories": 770.5507341440749,
                "totalWeight": 386.05757088175505,
                "totalTime": 0.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 770.5507341440749,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 51.2491269425295,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 20.37741651898365,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.01634,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 21.760229084183422,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 2.6250401156886003,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.0447582213837499,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.7539137647612499,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.29084445662249997,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.166457330128,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 71.25394073195675,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 417.3509903565,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 893.7839603260222,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 112.0810547735462,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 73.14061358406755,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1094.4193606386152,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.687611095803291,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 12.350681381803506,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 684.2354338821,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 69.110387364775,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.19333542752184996,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.4757695464055,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 21.247147591269226,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.845183373620575,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 56.704158490775,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 56.704158490775,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 4.0455717858425,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.86,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.6844129234055,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.9606938344275004,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 246.9546724218505,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 38.52753670720375,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 78.84481068081462,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 101.88708259491825,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.34825274046124993,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.1633778264899999,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 142.5078814639135,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 139.1169967855,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 37.24099834691759,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 11.20810547735462,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 17.41443180573037,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 23.285518311459896,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 31.597839421129393,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 112.27892165275915,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 97.7479191260143,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 7.678931929419444,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 16.11128562682083,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 36.59765741580769,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 132.79467244543267,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 141.93718258619805,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 14.17603962269375,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 168.56549107677085,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.733333333333333,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.22941948937,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 5.80057819535625,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 51.2491269425295,
                        "hasRDI": true,
                        "daily": 78.84481068081462,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 20.37741651898365,
                                "hasRDI": true,
                                "daily": 101.88708259491825,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.01634,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 21.760229084183422,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 2.6250401156886003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 1.0447582213837499,
                        "hasRDI": true,
                        "daily": 0.34825274046124993,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.7539137647612499,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.29084445662249997,
                                "hasRDI": true,
                                "daily": 1.1633778264899999,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.166457330128,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 71.25394073195675,
                        "hasRDI": true,
                        "daily": 142.5078814639135,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 417.3509903565,
                        "hasRDI": true,
                        "daily": 139.1169967855,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 893.7839603260222,
                        "hasRDI": true,
                        "daily": 37.24099834691759,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 112.0810547735462,
                        "hasRDI": true,
                        "daily": 11.20810547735462,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 73.14061358406755,
                        "hasRDI": true,
                        "daily": 17.41443180573037,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1094.4193606386152,
                        "hasRDI": true,
                        "daily": 23.285518311459896,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.687611095803291,
                        "hasRDI": true,
                        "daily": 31.597839421129393,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 12.350681381803506,
                        "hasRDI": true,
                        "daily": 112.27892165275915,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 684.2354338821,
                        "hasRDI": true,
                        "daily": 97.7479191260143,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 69.110387364775,
                        "hasRDI": true,
                        "daily": 7.678931929419444,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.19333542752184996,
                        "hasRDI": true,
                        "daily": 16.11128562682083,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.4757695464055,
                        "hasRDI": true,
                        "daily": 36.59765741580769,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 21.247147591269226,
                        "hasRDI": true,
                        "daily": 132.79467244543267,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.845183373620575,
                        "hasRDI": true,
                        "daily": 141.93718258619805,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 56.704158490775,
                        "hasRDI": true,
                        "daily": 14.17603962269375,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 56.704158490775,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 4.0455717858425,
                        "hasRDI": true,
                        "daily": 168.56549107677085,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.86,
                        "hasRDI": true,
                        "daily": 5.733333333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.6844129234055,
                        "hasRDI": true,
                        "daily": 11.22941948937,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 6.9606938344275004,
                        "hasRDI": true,
                        "daily": 5.80057819535625,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 246.9546724218505,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/52111a43d982b63e9fa42cc44d88bb30?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_727ac1139f6e85cf661478950ab66cd6",
                "label": "Fall Spiced Rubbed Steak recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c9d/c9dd2fa5fe21a4945781bdacf66ae466?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=18a4545fe7986cfee249d3e02fd13991d88dbdf8190c8433b390a14641c4e6e5",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c9d/c9dd2fa5fe21a4945781bdacf66ae466-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=917c1c69f4b6e87f958701d266e9b31dc9ed1126139c232d8d86caab0c0479da",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c9d/c9dd2fa5fe21a4945781bdacf66ae466-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fbf9e9cb489501f4bf7c74a8d5a9f1bf351ad2242d28fda388eb204df2065132",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c9d/c9dd2fa5fe21a4945781bdacf66ae466?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=18a4545fe7986cfee249d3e02fd13991d88dbdf8190c8433b390a14641c4e6e5",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "The Naptime Chef",
                "url": "http://www.thenaptimechef.com/2013/10/fall-spiced-rubbed-steak-on-the-optigrill-giveaway/",
                "shareAs": "http://www.edamam.com/recipe/fall-spiced-rubbed-steak-recipes-727ac1139f6e85cf661478950ab66cd6/steak",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 steaks about 1 ¼-inch thick steak",
                    "2 teaspoons instant coffee",
                    "1 teaspoon ground ginger"
                ],
                "ingredients": [
                    {
                        "text": "2 steaks about 1 ¼-inch thick steak",
                        "quantity": 2.0,
                        "measure": "steak",
                        "food": "steak",
                        "weight": 922.0,
                        "foodCategory": "meats",
                        "foodId": "food_aregbrwb5q7z2db1h14uxaizfd9f",
                        "image": "https://www.edamam.com/food-img/4d2/4d2ae7e6fd2145d4c89a8ffae7d4f2b7.jpg"
                    },
                    {
                        "text": "2 teaspoons instant coffee",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "instant coffee",
                        "weight": 2.0,
                        "foodCategory": "coffee and tea",
                        "foodId": "food_aof7z08ad0qgsta38run7arojif8",
                        "image": "https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg"
                    },
                    {
                        "text": "1 teaspoon ground ginger",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "ground ginger",
                        "weight": 1.8,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a8l1yfna3fgp3ha4a5b5labyetgz",
                        "image": "https://www.edamam.com/food-img/ee0/ee08c937de5c45a36bd0ad1eafc67496.jpg"
                    }
                ],
                "calories": 2115.2500000000005,
                "totalWeight": 925.8,
                "totalTime": 20.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2115.2500000000005,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 146.03892000000002,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 61.67720200000001,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 8.3902,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 67.42608200000001,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 6.6590419999999995,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 2.7971600000000008,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 2.5433600000000007,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.2538,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.06102000000000001,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 184.80564,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 571.64,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 323.92600000000004,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 198.492,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 102.59200000000001,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2205.84,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.565400000000002,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 30.590720000000005,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1613.364,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 36.916000000000004,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.0126,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.43432800000000005,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.8024400000000003,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 48.3487,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 5.248808,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 46.334,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 46.334,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 15.305200000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.9220000000000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.4894000000000003,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 14.804400000000003,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 585.06552,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 105.76250000000003,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 224.67526153846157,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 308.38601000000006,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.9323866666666669,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.0152,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 369.61128,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 190.54666666666665,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 13.49691666666667,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 19.8492,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 24.42666666666667,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 46.93276595744681,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 86.47444444444446,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 278.0974545454546,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 230.4805714285714,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 4.101777777777778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.014,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 36.19400000000001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 138.6492307692308,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 302.179375,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 403.75446153846156,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 11.5835,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 637.7166666666668,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.146666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 16.596,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 12.337000000000002,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 146.03892000000002,
                        "hasRDI": true,
                        "daily": 224.67526153846157,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 61.67720200000001,
                                "hasRDI": true,
                                "daily": 308.38601000000006,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 8.3902,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 67.42608200000001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 6.6590419999999995,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 2.7971600000000008,
                        "hasRDI": true,
                        "daily": 0.9323866666666669,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 2.5433600000000007,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.2538,
                                "hasRDI": true,
                                "daily": 1.0152,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.06102000000000001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 184.80564,
                        "hasRDI": true,
                        "daily": 369.61128,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 571.64,
                        "hasRDI": true,
                        "daily": 190.54666666666665,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 323.92600000000004,
                        "hasRDI": true,
                        "daily": 13.49691666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 198.492,
                        "hasRDI": true,
                        "daily": 19.8492,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 102.59200000000001,
                        "hasRDI": true,
                        "daily": 24.42666666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2205.84,
                        "hasRDI": true,
                        "daily": 46.93276595744681,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.565400000000002,
                        "hasRDI": true,
                        "daily": 86.47444444444446,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 30.590720000000005,
                        "hasRDI": true,
                        "daily": 278.0974545454546,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1613.364,
                        "hasRDI": true,
                        "daily": 230.4805714285714,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 36.916000000000004,
                        "hasRDI": true,
                        "daily": 4.101777777777778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.0126,
                        "hasRDI": true,
                        "daily": 0.014,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.43432800000000005,
                        "hasRDI": true,
                        "daily": 36.19400000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.8024400000000003,
                        "hasRDI": true,
                        "daily": 138.6492307692308,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 48.3487,
                        "hasRDI": true,
                        "daily": 302.179375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 5.248808,
                        "hasRDI": true,
                        "daily": 403.75446153846156,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 46.334,
                        "hasRDI": true,
                        "daily": 11.5835,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 46.334,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 15.305200000000001,
                        "hasRDI": true,
                        "daily": 637.7166666666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.9220000000000002,
                        "hasRDI": true,
                        "daily": 6.146666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.4894000000000003,
                        "hasRDI": true,
                        "daily": 16.596,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 14.804400000000003,
                        "hasRDI": true,
                        "daily": 12.337000000000002,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 585.06552,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/727ac1139f6e85cf661478950ab66cd6?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1228935a2aa5d8d4da87a0e7ff057bc9",
                "label": "Sauteed Skirt Steak",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/524/524cdf1ce37315e3d2c02d4e0c2af4bc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70abab7c80901b9180453aac7e1c886d5e1218bd360d4ce70650fa4b22879718",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/524/524cdf1ce37315e3d2c02d4e0c2af4bc-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=59c10f449aac82b5b3215957ae8cbccb77243802218e8f9ece1084f8103fc8e5",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/524/524cdf1ce37315e3d2c02d4e0c2af4bc-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1c92e7369c9d15595f16d236991193467ac65f1e71e8dd2a26d016f79ac686ca",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/524/524cdf1ce37315e3d2c02d4e0c2af4bc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF%2BD19xeovSrl0Nv%2FtNR8Ke%2FwWsaxnBnoHnhu3GXozyFAiEAuMGDUibgwoBBHWl%2FZ4TWKJkWjMCrUXtdk6COc7l9%2B3cquQUISxAAGgwxODcwMTcxNTA5ODYiDHacLTR2sZSDDuLakCqWBcxBk%2FSQ%2F6Qfh8jmWi3bM%2FwHya075X2mW2LF19gDC5sTgIWE%2BLyfo7sCCXL66MFIl%2BdSY2HRo6LMTuUuDo8%2B0phA1Z6lb99PVWUReNaSjb6OCu%2FZPMKrVLA7v7JS9ZgfPmfA4TvjAIsv8jYfUJLhmumRsbGmm4siwQPfxvCDFQGbbcI4qHpZMt09Ys2etL0MA65gKQGeb%2F2VeURUj3Gem6sxOqlqpQ9jvwjQdxclPlBWGD2AbWmg0TS47M0BPKF5rUz8nRR%2B4nWPU7QS9iljZLfuzkOQm1GsCYZCJF7YiSWukj2x4ARucVTDKXZirPb88ZptR7Zqd6ZeO%2FXesXXY%2BQ8%2BEpmrmzSfOqP5SHVsrVmBiaHzYdZlLXzU0kXPb%2FpjskZhQQ7cLBNqCwhVCbZr%2Fk7qTLkEu8UMYxokJ6sANQjwHFCYXywrOJxWJdlICAt4tK98xleKa42%2B06KdH4oy1eVgqG7GhGZ9gg9C812b1YcW2N5H9Jpi46yEx%2FZvcO3VFCG%2F9WR%2BhNVtKL%2B9gYZqu0JpJchi7KArfiJ3xDEBkEF%2Boba%2BPOHK38UAgpSUOlUvg6P%2BKimW1Zs0KIzv%2F4Tq6f0PuHT3d1ygnadwIHwMR3UxVQMaHAZo1NAYYG6uvkWq%2FPjUrxxgadr9KhvOFpT5XQmqUINYHUKEuqK835HeHjlmqUo55Wgpf%2BW21nh7qqpX%2B73bqEjCPrYi%2FGzMpgmfFpErYiBIFk46yPVd3szvc8dQHjvc9DF06JNVKqwkC14R7QbHFkl4rCozZcmP6K%2FaptRUdrSm2tXHZkcOqt%2B%2Bqi8KRXFrGg%2FsRkow%2F9lbYARBNzjoQGObbiVtWErFEmLsJIruLXmwJNLMQctGN3WH78RCylp4C7sIMIeTo6AGOrEB0zNc6zZzzC7fU3kdUVFfkxHxoG1LBu%2Bn79TdFYNdopZcs8kqM8QJStB%2FKA0rkt5mCk81CctFJVg0g7nJ1HhKlbkVkTogbmr1me7almSrAlFBV4cyDxWbegQM%2B0AuO%2Fcst%2BpAQYQ3u962FW1GUZrNqkDDu9SOzGNEwW2AOdIyZk30eX6GrZ2fhLOxB1NkBb2%2BjP5DDXxhx8o84oTWCchWqAl3TNR4Tesb9EQPgHQaIXGe&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T192111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJRWPIWNG%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70abab7c80901b9180453aac7e1c886d5e1218bd360d4ce70650fa4b22879718",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/sauteed-skirt-steak-103668",
                "shareAs": "http://www.edamam.com/recipe/sauteed-skirt-steak-1228935a2aa5d8d4da87a0e7ff057bc9/steak",
                "yield": 8.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 lb skirt steak, cut into 8 pieces",
                    "1 1/2 tablespoons Worcestershire sauce",
                    "1 tablespoon oil"
                ],
                "ingredients": [
                    {
                        "text": "3 lb skirt steak, cut into 8 pieces",
                        "quantity": 3.0,
                        "measure": "pound",
                        "food": "skirt steak",
                        "weight": 1360.77711,
                        "foodCategory": "meats",
                        "foodId": "food_agvdl6pajjrz8sbghz0cdaz6q4yf",
                        "image": "https://www.edamam.com/food-img/e1d/e1dc9aaf420f55f30dd24768e532594a.jpg"
                    },
                    {
                        "text": "1 1/2 tablespoons Worcestershire sauce",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "Worcestershire sauce",
                        "weight": 25.5,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
                        "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
                    },
                    {
                        "text": "1 tablespoon oil",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "oil",
                        "weight": 14.0,
                        "foodCategory": "Oils",
                        "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                        "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                    }
                ],
                "calories": 2797.1653645,
                "totalWeight": 1400.27711,
                "totalTime": 0.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "starter"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2797.1653645,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 187.907314658,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 69.5326197174,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 9.376623203500001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 90.64134431100001,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 12.0501115756,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 4.9623,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 4.9623,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 2.5576499999999998,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 272.971888266,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 884.5051215000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1134.4051215000002,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 108.9316266,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 275.47042200000004,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3660.3738594,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 24.48471087,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 81.286843467,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1974.8190384000002,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 55.7060844,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.315,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7390618683000001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.7752870525000004,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 69.25154610359999,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 5.7424794042,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 42.8633133,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 42.8633133,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 33.475116906000004,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.3607771100000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.778121087000001,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 30.64865665,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 925.624866705,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 139.85826822500002,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 289.0881763969231,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 347.663098587,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.6541000000000001,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 545.943776532,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 294.83504050000005,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 47.26688006250001,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 10.89316266,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 65.58819571428572,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 77.88029488085107,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 136.0261715,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 738.9713042454546,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 282.1170054857143,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 6.189564933333333,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.683333333333333,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 61.58848902500001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 290.40669634615386,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 432.82216314749996,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 441.7291849384615,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 10.715828325,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1394.7965377500002,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 9.071847400000001,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 31.854140580000003,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 25.540547208333333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 187.907314658,
                        "hasRDI": true,
                        "daily": 289.0881763969231,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 69.5326197174,
                                "hasRDI": true,
                                "daily": 347.663098587,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 9.376623203500001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 90.64134431100001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 12.0501115756,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 4.9623,
                        "hasRDI": true,
                        "daily": 1.6541000000000001,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 4.9623,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.0,
                                "hasRDI": true,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 2.5576499999999998,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 272.971888266,
                        "hasRDI": true,
                        "daily": 545.943776532,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 884.5051215000001,
                        "hasRDI": true,
                        "daily": 294.83504050000005,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1134.4051215000002,
                        "hasRDI": true,
                        "daily": 47.26688006250001,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 108.9316266,
                        "hasRDI": true,
                        "daily": 10.89316266,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 275.47042200000004,
                        "hasRDI": true,
                        "daily": 65.58819571428572,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3660.3738594,
                        "hasRDI": true,
                        "daily": 77.88029488085107,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 24.48471087,
                        "hasRDI": true,
                        "daily": 136.0261715,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 81.286843467,
                        "hasRDI": true,
                        "daily": 738.9713042454546,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1974.8190384000002,
                        "hasRDI": true,
                        "daily": 282.1170054857143,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 55.7060844,
                        "hasRDI": true,
                        "daily": 6.189564933333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 3.315,
                        "hasRDI": true,
                        "daily": 3.683333333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7390618683000001,
                        "hasRDI": true,
                        "daily": 61.58848902500001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.7752870525000004,
                        "hasRDI": true,
                        "daily": 290.40669634615386,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 69.25154610359999,
                        "hasRDI": true,
                        "daily": 432.82216314749996,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 5.7424794042,
                        "hasRDI": true,
                        "daily": 441.7291849384615,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 42.8633133,
                        "hasRDI": true,
                        "daily": 10.715828325,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 42.8633133,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 33.475116906000004,
                        "hasRDI": true,
                        "daily": 1394.7965377500002,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.3607771100000001,
                        "hasRDI": true,
                        "daily": 9.071847400000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.778121087000001,
                        "hasRDI": true,
                        "daily": 31.854140580000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 30.64865665,
                        "hasRDI": true,
                        "daily": 25.540547208333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 925.624866705,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/1228935a2aa5d8d4da87a0e7ff057bc9?type=public&app_id=170486e7&app_key=545e5eb2fa7ebff71cd961a03b2a35b1",
                    "title": "Self"
                }
            }
        }
    ]

    export default exampleData