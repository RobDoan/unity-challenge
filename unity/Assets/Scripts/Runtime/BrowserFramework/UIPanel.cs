namespace UnityEngine.Replay
{
    /// <summary>
    ///     A UI panel containing a number of image and text objects
    /// </summary>
    public class UIPanel : UIEntity
    {
        public int panelId { get; private set; }

        public int width
        {
            get { return Mathf.RoundToInt(m_RectTransform.sizeDelta.x); }
        }

        public int height
        {
            get { return Mathf.RoundToInt(m_RectTransform.sizeDelta.y); }
        }

        /// <summary>
        ///     Sets the panel position
        /// </summary>
        /// <param name="newPos">The new position to set</param>
        public void SetPosition(Vector2Int newPos)
        {
            m_RectTransform.anchoredPosition = newPos;
        }
    }
}
