package by.kraskovski.pms.application.controller.dto;

import by.kraskovski.pms.domain.model.Authority;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Data transfer object for {@link by.kraskovski.pms.domain.model.User}
 */
@Getter
@Setter
public class UserDto {
    private String id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String avatar;
    private List<Authority> authorities;
    private LocalDateTime createDate;
}
