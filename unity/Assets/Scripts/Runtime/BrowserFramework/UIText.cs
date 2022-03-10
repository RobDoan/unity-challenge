using TMPro;
using UnityEngine.UI;

namespace UnityEngine.Replay
{
    /// <summary>
    ///     A UI text open of type Text or TextMeshProUGUI
    /// </summary>
    public class UIText : MonoBehaviour
    {
        public TextType textType;
        
        private TextMeshProUGUI m_TMPText;
        private Text m_UGUIText;

        /// <summary>
        ///     Awake is called when the script instance is being loaded.
        /// </summary>
        private void Awake()
        {
            Init();
        }

        /// <summary>
        ///     Gets a reference to the Text or TextMeshProUGUI component, or creates one
        /// </summary>
        private void Init()
        {
            if (m_TMPText != null || m_UGUIText != null) return;
            m_TMPText = GetComponent<TextMeshProUGUI>();
            
            if (m_TMPText != null) return;
            m_UGUIText = GetComponent<Text>();
            
            if (m_UGUIText != null) return;
            m_UGUIText = gameObject.AddComponent<Text>();
        }

        /// <summary>
        ///     Sets the text content
        /// </summary>
        /// <param name="newText">The new text content</param>
        public void SetText(string newText)
        {
            if (m_TMPText != null)
            {
                m_TMPText.text = newText;
            }

            if (m_UGUIText != null)
            {
                m_UGUIText.text = newText;
            }
        }
    }
}
