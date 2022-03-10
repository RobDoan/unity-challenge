
namespace UnityEngine.Replay
{
    /// <summary>
    ///     Abstract UI object that contains text and images and a reference to a content Listing
    /// </summary>
    [RequireComponent(typeof(CanvasGroup))]
    public class UIEntity : MonoBehaviour
    {
        protected CanvasGroup m_CanvasGroup;
        protected UIImage[] m_Images;
        protected Listing m_Listing;
        protected RectTransform m_RectTransform;
        protected UIText[] m_Texts;

        /// <summary>
        ///     Awake is called when the script instance is being loaded.
        /// </summary>
        private void Awake()
        {
            m_CanvasGroup = GetComponent<CanvasGroup>();
            m_RectTransform = GetComponent<RectTransform>();
            m_Texts = GetComponentsInChildren<UIText>();
            m_Images = GetComponentsInChildren<UIImage>();
        }

        /// <summary>
        ///     Sets the entity's content based on a Listing
        /// </summary>
        /// <param name="l">The Listing to use</param>
        public virtual void SetData(Listing l)
        {
            m_Listing = l;
            foreach (var text in m_Texts) text.SetText(l.GetText(text.textType));
            foreach (var image in m_Images)
            {
                image.SetImage(l.GetImage(image.imageType));
            }
        }
    }
}
