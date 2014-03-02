using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using _3DProTek.Models;
using _3DProTek.Models.ViewModels;

namespace _3DProTek.Controllers
{
    public class ModelsAPIController : ApiController
    {
        private IRepository _repo;

        public ModelsAPIController(IRepository repo)
        {
            _repo = repo;
        }

        // Get api/modelsapi?featured=true
        public HttpResponseMessage GetFeaturedModels(bool featured)
        {
            _repo.DisableProxyCreation();

            var models = _repo.GetQueryable<Model>().Where(m => m.IsActive).Take(6);
            var featuredModels = new List<FeaturedModel>();
            foreach (var model in models)
            {
                featuredModels.Add(new FeaturedModel()
                {
                    Id = model.Id,
                    Name = model.Name,
                    FileName = model.FileName
                });
            }
            
            return Request.CreateResponse(HttpStatusCode.OK, featuredModels);
        }

        // Get api/modelsapi?id
        public HttpResponseMessage GetModel(int Id)
        {
            _repo.DisableProxyCreation();

            var model = _repo.GetById<Model>(Id);
            if (model != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, model);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }
    }
}
