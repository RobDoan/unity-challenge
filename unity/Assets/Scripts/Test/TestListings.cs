using System;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Replay;
using UnityEngine.Networking;
using Services;
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
        private async void Start()
        {
            var jsonText = await GameItemService.RequestGameItems();
            UIBrowser.instance.Init(jsonText);
        }
    }
}