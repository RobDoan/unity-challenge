using System;
using UnityEngine;
using UnityEngine.Replay;

namespace Unity.Metacast.Demo
{
    /// <summary>
    ///     Populate UIBrowser with test json data
    /// </summary>
    public class TestListings : MonoBehaviour
    {
        [SerializeField] private TextAsset m_TestJson;

        /// <summary>
        ///     Start is called on the frame when a script is enabled just
        ///     before any of the Update methods are called the first time.
        /// </summary>
        private void Start()
        {
            //TODO Instead of a TextAsset pass JSON result from the web server.
            UIBrowser.instance.Init(m_TestJson.text);
        }
    }
}