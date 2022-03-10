using System.Collections.Generic;
using UnityEngine.UI;

namespace UnityEngine.Replay
{
    /// <summary>
    ///     Carousel of UIPanel items
    /// </summary>
    public class UICarousel : MonoBehaviour
    {
        private RectTransform m_ContentRectTransform;
        private UIPanel m_PanelItem;

        private List<UIPanel> m_PanelItems = new List<UIPanel>();

        private List<Vector2Int> m_PanelPositions = new List<Vector2Int>();
        private RectTransform m_RectTransform;
        private ScrollRect m_ScrollRect;

        private int panelWidth
        {
            get { return m_PanelItems[0].width; }
        }

        /// <summary>
        ///     Awake is called when the script instance is being loaded.
        /// </summary>
        private void Awake()
        {
            m_RectTransform = GetComponent<RectTransform>();
            m_ScrollRect = GetComponentInChildren<ScrollRect>();
            m_PanelItem = GetComponentInChildren<UIPanel>();
            m_ContentRectTransform = m_ScrollRect.content;
        }

        /// <summary>
        ///     Sets the carousel's position
        /// </summary>
        /// <param name="pos">The Vector2 to set as the anchoredPosition</param>
        public void SetPosition(Vector2 pos)
        {
            m_RectTransform.anchoredPosition = pos;
        }

        /// <summary>
        ///     Initialize the carousel content
        /// </summary>
        /// <param name="category">The carousel's category name</param>
        /// <param name="listings">The listings to convert into panels</param>
        public void Init(string category, List<Listing> listings)
        {
            foreach (var text in GetComponentsInChildren<UIText>())
            {
                if (text.textType == TextType.Category)
                {
                    text.SetText(category.ToUpper());
                }
            }            
            CreatePanels(listings);
        }

        /// <summary>
        ///     Creates the content panels from a list of listings
        /// </summary>
        /// <param name="listings">The listings to convert into panels</param>
        private void CreatePanels(List<Listing> listings)
        {
            foreach (var listing in listings)
            {
                var newPanelItem = Instantiate(m_PanelItem, m_PanelItem.transform.parent);
                newPanelItem.SetData(listing);
                m_PanelItems.Add(newPanelItem);
            }

            Destroy(m_PanelItem.gameObject);
            SetPanelPositions();

            m_ContentRectTransform.sizeDelta = new Vector2(panelWidth * m_PanelItems.Count, m_ContentRectTransform.sizeDelta.y);
        }

        /// <summary>
        ///     Sets the UIPanel positions
        /// </summary>
        private void SetPanelPositions()
        {
            var newPos = Vector2Int.zero;

            for (var i = 0; i < m_PanelItems.Count; i++)
            {
                m_PanelPositions.Add(newPos);
                m_PanelItems[i].SetPosition(newPos);
                newPos += Vector2Int.right * panelWidth;
            }
        }
    }
}
