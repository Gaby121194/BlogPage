using AutoMapper;
using ITsynch.Trainings.LBGC.Demo.Models;

namespace ITsynch.Trainings.LBGC.Demo.DataTransfer
{
    public class ArticlesProfile : Profile
    {
        public ArticlesProfile()
        {
            CreateMap<Article, ArticleDto>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.Content, opts => opts.MapFrom(src => src.Content))
                .ForMember(dest => dest.Date, opts => opts.MapFrom(src => src.Date))
                .ForMember(dest => dest.UserName, opts => opts.MapFrom(src => src.UserName));
        }
    }
}
