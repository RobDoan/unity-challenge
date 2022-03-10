using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace UnityEngine.Replay
{
    /// <summary>
    ///     A ScrollRect that can be nested inside another ScrollRect, without breaking the parent one
    /// </summary>
    public class ScrollRectNested : ScrollRect
    {
        private bool m_DraggingParent;
        private ScrollRect m_ParentScroll;

        /// <summary>
        ///     Awake is called when the script instance is being loaded.
        /// </summary>
        protected override void Awake()
        {
            base.Awake();
            m_ParentScroll = GetScrollParent(transform);
        }

        /// <summary>
        ///     Returns that ScrollRect that this one is nested inside
        /// </summary>
        /// <param name="t">The transform whose parent we will be searching</param>
        /// <returns>The parent ScrollRect</returns>
        private ScrollRect GetScrollParent(Transform t)
        {
            if (t.parent != null)
            {
                var parent = t.parent;
                var scroll = parent.GetComponent<ScrollRect>();
                if (scroll != null)
                {
                    return scroll;
                }
                return GetScrollParent(parent);
            }

            return null;
        }

        /// <summary>
        ///     Whether or not the input should potentially drag the parent
        /// </summary>
        /// <param name="inputDelta">The current input delta</param>
        /// <returns>A bool of whether or not this should drag the parent</returns>
        private bool IsPotentialParentDrag(Vector2 inputDelta)
        {
            if (m_ParentScroll != null)
            {
                if (m_ParentScroll.horizontal && !m_ParentScroll.vertical) return Mathf.Abs(inputDelta.x) > Mathf.Abs(inputDelta.y);
                if (!m_ParentScroll.horizontal && m_ParentScroll.vertical)
                    return Mathf.Abs(inputDelta.x) < Mathf.Abs(inputDelta.y);
                return true;
            }

            return false;
        }

        /// <summary>
        ///     Override for OnInitializePotentialDrag, to pass the event data to the parent as well
        /// </summary>
        /// <param name="eventData">The current PointerEventData</param>
        public override void OnInitializePotentialDrag(PointerEventData eventData)
        {
            base.OnInitializePotentialDrag(eventData);
            if (m_ParentScroll == null) return;
            m_ParentScroll.OnInitializePotentialDrag(eventData);
        }

        /// <summary>
        ///     Handling for when the content begins being dragged.
        /// </summary>
        /// <param name="eventData">The current PointerEventData</param>
        public override void OnBeginDrag(PointerEventData eventData)
        {
            if (IsPotentialParentDrag(eventData.delta))
            {
                m_ParentScroll.OnBeginDrag(eventData);
                m_DraggingParent = true;
            }
            else
            {
                base.OnBeginDrag(eventData);
            }
        }

        /// <summary>
        ///     Handling for when the content is dragged.
        /// </summary>
        /// <param name="eventData">The current PointerEventData</param>
        public override void OnDrag(PointerEventData eventData)
        {
            if (m_DraggingParent)
                m_ParentScroll.OnDrag(eventData);
            else
                base.OnDrag(eventData);
        }

        /// <summary>
        ///     Handling for when the content has finished being dragged.
        /// </summary>
        /// <param name="eventData">The current PointerEventData</param>
        public override void OnEndDrag(PointerEventData eventData)
        {
            base.OnEndDrag(eventData);
            if (m_ParentScroll != null && m_DraggingParent)
            {
                m_DraggingParent = false;
                m_ParentScroll.OnEndDrag(eventData);
            }
        }
    }
}
