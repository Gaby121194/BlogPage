using AutoMapper;
using ITsynch.Trainings.Demo.Template.Models;

namespace ITsynch.Trainings.Demo.Template.DataTransfer
{
    public class UsersProfile : Profile
    {
        public UsersProfile()
        {
            CreateMap<User, UserDto>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Username, opts => opts.MapFrom(src => src.Username))
                .ForMember(dest => dest.FirstName, opts => opts.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opts => opts.MapFrom(src => src.LastName));
        }
    }
}
