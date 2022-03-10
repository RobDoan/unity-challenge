

using System;
using System.Collections;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

namespace Services
{
  class LoadingGameDataFailure : Exception
{
    public LoadingGameDataFailure(string message)
    {
    }
}
  public class GameItemService
  {
    [SerializeField] private static string url = "http://localhost:8080/api/v1/game-items";
  public static async Task<string> RequestGameItems(){
        using(UnityWebRequest unityWebRequest = UnityWebRequest.Get(url))
        {
            var asyncOp = unityWebRequest.SendWebRequest();
            while( asyncOp.isDone == false )
              await Task.Delay( 1000/30 );//30 hertz

            if( unityWebRequest.isNetworkError || unityWebRequest.isHttpError )
            {
              throw new LoadingGameDataFailure("loading game items has been failed");
            }
            else
            {
              return unityWebRequest.downloadHandler.text;
            }
        }
    }
  }
}