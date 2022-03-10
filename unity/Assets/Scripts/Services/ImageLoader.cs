using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

namespace Services
{
  public class ImageLoader
  {
    // Start is called before the first frame update
    public static async Task<Texture2D> GetRemoteTexture(string url)
    {
      using (UnityWebRequest unityWebRequest = UnityWebRequestTexture.GetTexture(url))
      {
        var asyncOp = unityWebRequest.SendWebRequest();

        while (asyncOp.isDone == false)
          await Task.Delay(1000 / 30);//30 hertz

        if (unityWebRequest.isNetworkError || unityWebRequest.isHttpError)
        {
          Debug.Log( $"{unityWebRequest.error}, URL:{unityWebRequest.url}" );
          return new Texture2D(0, 0);
        }
        else
        {
          return new Texture2D(0, 0);
        //   return ((DownloadHandlerTexture)unityWebRequest.downloadHandler).texture;
        }
      }
    }
  }
}

