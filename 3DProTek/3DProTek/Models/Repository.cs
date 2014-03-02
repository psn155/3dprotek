using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _3DProTek.Models
{
    public class Repository : IRepository, IDisposable
    {
        private ProTekDb _db;

        public Repository(ProTekDb db)
        {
            _db = db;
        }

        #region IRepository Members

        public int SaveChanges()
        {
            return _db.SaveChanges();
        }

        public IQueryable<T> GetQueryable<T>() where T : class
        {
            return _db.Set<T>();
        }

        public T GetById<T>(int id) where T : class, IIdModel
        {
            return _db.Set<T>().FirstOrDefault(x => x.Id == id);
        }

        public T Attach<T>(T entity) where T : class
        {
            var entry = _db.Entry<T>(entity);
            entry.State = System.Data.EntityState.Modified;
            return entity;
        }

        public T Add<T>(T entity) where T : class
        {
            return _db.Set<T>().Add(entity);
        }

        public T Delete<T>(T entity) where T : class
        {
            return _db.Set<T>().Remove(entity);
        }

        public T DeleteById<T>(int id) where T : class, IIdModel
        {
            var entity = _db.Set<T>().FirstOrDefault(x => x.Id == id);
            if (entity != null)
                return _db.Set<T>().Remove(entity);
            return null;
        }

        public void DisableProxyCreation()
        {
            _db.Configuration.ProxyCreationEnabled = false;
        }

        #endregion

        #region IDisposable Members

        public void Dispose()
        {
            if (_db != null)
                _db.Dispose();
            GC.SuppressFinalize(this);
        }

        #endregion
    }
}