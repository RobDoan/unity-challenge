using System;
using System.Collections.Generic;

namespace UnityEngine.Replay
{    
    /// <summary>
    /// container for multiple listings
    /// </summary>
    [Serializable]
    public class ListingsContainer
    {
        public List<Listing> listings;
    }

    /// <summary>
    ///     Represents an individual browser listing
    /// </summary>
    [Serializable]
    public class Listing
    {
        [Serializable]
        public struct ImageObject
        {
            public string id;
            public string url;
            public Texture2D texture;
            public ImageType type;
            public bool isLoaded;
        }

        public string category;
        public string title;
        public string subtitle;
        public string description;
        public ImageObject[] images;

        /// <summary>
        ///     Gets a text string of a given TextType
        /// </summary>
        /// <param name="textType">The TextType requested</param>
        /// <returns>A string that matches the requested TextType</returns>
        public string GetText(TextType textType)
        {
            switch (textType)
            {
                case TextType.Title:
                    return title;
                case TextType.Subtitle:
                    return subtitle;
                case TextType.Description:
                    return description;
            }

            return "";
        }

        /// <summary>
        ///     Gets an image of a given ImageType
        /// </summary>
        /// <param name="imageType">The ImageType requested</param>
        /// <returns>An image that matches the requested ImageType</returns>
        public Texture2D GetImage(ImageType imageType)
        {
            foreach (var imageObject in images)
                if (imageObject.isLoaded && imageObject.type == imageType)
                {
                    return imageObject.texture;
                }
            
            return new Texture2D(0, 0);
        }
    }
}
