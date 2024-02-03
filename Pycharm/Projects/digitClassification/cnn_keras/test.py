import os
from PIL import Image
import numpy as np
import matplotlib as plt
# Specify the path to the folder containing the images
folder_path = "C:\\Users\salma\Pycharm\Projects\digitClassification\cnn_keras\data"

# Get a list of all image files in the folder
image_files = [f for f in os.listdir(folder_path) if f.endswith(('.jpg', '.jpeg', '.png'))]

# Load and preprocess the images
loaded_images = []
for image_file in image_files:
    image_path = os.path.join(folder_path, image_file)
    image = Image.open(image_path).convert("L")  # Convert to grayscale if needed
    image = image.resize((28, 28))  # Resize to the input size of your model
    image = np.array(image) / 255.0  # Normalize pixel values
    loaded_images.append(image)

# Convert the list of images to a NumPy array
loaded_images = np.array(loaded_images)

# Use the trained model for prediction
predictions = model_mlp.predict(loaded_images)

# Display or analyze the results based on your requirements
for i, prediction in enumerate(predictions):
    predicted_label = np.argmax(prediction)
    print(f"Image {i + 1}: Predicted Label - {predicted_label}")
    plt.imshow(loaded_images[i], cmap="Greys")
    plt.show()
